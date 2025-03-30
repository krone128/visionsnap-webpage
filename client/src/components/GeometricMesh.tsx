import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

const GeometricMesh: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const deerRef = useRef<THREE.Group | null>(null);
  const scrollRef = useRef(0);
  const { theme } = useTheme();

  // Custom shader material
  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying float vRandom;
    
    uniform float time;
    
    // Random function for vertex movement
    float random(vec2 co) {
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normal;
      
      // Create random value for each vertex
      vRandom = random(position.xy);
      
      // Add randomized vertex movement for breathing effect
      vec3 pos = position;
      float breathing = sin(time * 0.5 + vRandom * 6.28) * 0.2;
      pos *= (1.0 + breathing);
      
      // Add larger random offset to each vertex
      pos += vec3(
        sin(time * 0.3 + vRandom * 6.28) * 0.2,
        cos(time * 0.4 + vRandom * 6.28) * 0.2,
        sin(time * 0.2 + vRandom * 6.28) * 0.2
      );
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    uniform float scroll;
    uniform bool isDarkTheme;
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying float vRandom;

    vec3 warmColor(float t) {
      // Create warm color palette (orange, yellow, gold)
      vec3 orange = vec3(1.0, 0.5, 0.0);  // Orange
      vec3 yellow = vec3(1.0, 0.8, 0.2);  // Yellow
      vec3 gold = vec3(1.0, 0.843, 0.0);  // Gold
      
      // Smoothly interpolate between colors
      if (t < 0.5) {
        return mix(orange, yellow, t * 2.0);
      } else {
        return mix(yellow, gold, (t - 0.5) * 2.0);
      }
    }

    vec3 coldColor(float t) {
      // Create cold color palette (sky blue, blue, navy)
      vec3 skyBlue = vec3(0.529, 0.808, 0.922);  // Sky Blue
      vec3 blue = vec3(0.0, 0.478, 0.8);         // Blue
      vec3 navy = vec3(0.0, 0.0, 0.502);         // Navy
      
      // Smoothly interpolate between colors
      if (t < 0.5) {
        return mix(skyBlue, blue, t * 2.0);
      } else {
        return mix(blue, navy, (t - 0.5) * 2.0);
      }
    }

    void main() {
      // Create breathing effect with random variation
      float breathing = sin(time * 0.5 + vRandom * 6.28) * 0.5 + 0.5;
      
      // Create UV-based color shift with random variation
      float hue = fract(vUv.x + time * 0.05 + vRandom * 0.2);
      vec3 color = isDarkTheme ? warmColor(hue) : coldColor(hue);
      
      // Create circular fade from center with random variation
      vec2 center = vec2(0.5, 0.5);
      float dist = length(vUv - center);
      float fade = 1.0 - smoothstep(0.0, 0.5, dist);
      
      // Combine effects with random variation
      float intensity = mix(breathing, fade, 0.5);
      
      // Add randomized pulsing
      float pulse = sin(time * 0.3 + vRandom * 6.28) * 0.5 + 0.5;
      intensity *= pulse;
      
      // Create smooth alpha transition
      float alpha = intensity * 0.8;
      alpha = smoothstep(0.0, 1.0, alpha);
      
      // Ensure minimum visibility
      alpha = max(alpha, 0.1);
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8; // Moved camera back to see larger plane
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        scroll: { value: 0 },
        isDarkTheme: { value: theme === 'dark' }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      wireframe: true,
      wireframeLinewidth: 1
    });

    // Create complex plane with more triangles and random vertex positions
    const geometry = new THREE.PlaneGeometry(8, 8, 20, 20);
    
    // Add random positions to vertices
    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += (Math.random() - 0.5) * 0.5;     // X
      positions[i + 1] += (Math.random() - 0.5) * 0.5; // Y
      positions[i + 2] += (Math.random() - 0.5) * 0.5; // Z
    }
    geometry.attributes.position.needsUpdate = true;
    
    const mesh = new THREE.Mesh(geometry, material);
    
    // Rotate to face camera
    mesh.rotation.x = 0;
    mesh.rotation.y = 0;
    mesh.rotation.z = 0;
    scene.add(mesh);

    // Handle scroll
    const handleScroll = () => {
      scrollRef.current = window.scrollY * 0.001;
    };
    window.addEventListener('scroll', handleScroll);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (mesh) {
        const material = mesh.material as THREE.ShaderMaterial;
        material.uniforms.time.value += 0.01;
        material.uniforms.scroll.value = scrollRef.current;
        material.uniforms.isDarkTheme.value = theme === 'dark';
        
        // Gentle floating motion
        mesh.position.y = Math.sin(material.uniforms.time.value * 0.5) * 0.2;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default GeometricMesh; 