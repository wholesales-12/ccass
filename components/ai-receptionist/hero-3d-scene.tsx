"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sparkles, Trail } from "@react-three/drei"
import { Suspense, useMemo, useRef } from "react"
import * as THREE from "three"

function AIOrb() {
  const matRef = useRef<any>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.08
    }
  })

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.9}>
      <group ref={groupRef}>
        {/* Outer glow halo */}
        <mesh scale={1.55}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshBasicMaterial color="#e879f9" transparent opacity={0.05} />
        </mesh>

        {/* Main orb */}
        <mesh>
          <icosahedronGeometry args={[1.2, 32]} />
          <MeshDistortMaterial
            ref={matRef}
            color="#7c3aed"
            emissive="#c026d3"
            emissiveIntensity={0.55}
            distort={0.42}
            speed={2.2}
            metalness={0.85}
            roughness={0.18}
          />
        </mesh>

        {/* Inner core */}
        <mesh scale={0.55}>
          <icosahedronGeometry args={[1, 8]} />
          <meshStandardMaterial
            color="#f0abfc"
            emissive="#e879f9"
            emissiveIntensity={1.4}
            metalness={1}
            roughness={0}
            wireframe
          />
        </mesh>
      </group>
    </Float>
  )
}

function VoiceBars() {
  const groupRef = useRef<THREE.Group>(null)
  const bars = useMemo(() => Array.from({ length: 24 }), [])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += 0.003
    groupRef.current.children.forEach((bar, i) => {
      const t = state.clock.elapsedTime
      const scale = 0.4 + Math.abs(Math.sin(t * 2 + i * 0.5)) * 1.6
      bar.scale.y = scale
    })
  })

  return (
    <group ref={groupRef}>
      {bars.map((_, i) => {
        const angle = (i / bars.length) * Math.PI * 2
        const radius = 2.2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, -angle, 0]}>
            <boxGeometry args={[0.04, 0.5, 0.04]} />
            <meshBasicMaterial color={i % 3 === 0 ? "#e879f9" : "#a78bfa"} transparent opacity={0.85} />
          </mesh>
        )
      })}
    </group>
  )
}

function OrbitingDots() {
  const ref1 = useRef<THREE.Mesh>(null)
  const ref2 = useRef<THREE.Mesh>(null)
  const ref3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref1.current) {
      ref1.current.position.x = Math.cos(t * 0.7) * 2.6
      ref1.current.position.z = Math.sin(t * 0.7) * 2.6
      ref1.current.position.y = Math.sin(t * 1.2) * 0.4
    }
    if (ref2.current) {
      ref2.current.position.x = Math.cos(t * 0.5 + 2) * 3
      ref2.current.position.z = Math.sin(t * 0.5 + 2) * 3
      ref2.current.position.y = Math.cos(t * 0.9) * 0.6
    }
    if (ref3.current) {
      ref3.current.position.x = Math.cos(-t * 0.6 + 4) * 2.8
      ref3.current.position.z = Math.sin(-t * 0.6 + 4) * 2.8
      ref3.current.position.y = Math.sin(t * 0.7 + 1) * 0.5
    }
  })

  return (
    <>
      <Trail width={0.6} length={5} color="#e879f9" attenuation={(w) => w * w}>
        <mesh ref={ref1}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color="#f5d0fe" />
        </mesh>
      </Trail>
      <Trail width={0.5} length={4} color="#a78bfa" attenuation={(w) => w * w}>
        <mesh ref={ref2}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#ddd6fe" />
        </mesh>
      </Trail>
      <Trail width={0.4} length={3} color="#c084fc" attenuation={(w) => w * w}>
        <mesh ref={ref3}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#e9d5ff" />
        </mesh>
      </Trail>
    </>
  )
}

function Rings() {
  const r1 = useRef<THREE.Mesh>(null)
  const r2 = useRef<THREE.Mesh>(null)
  const r3 = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (r1.current) r1.current.rotation.x += delta * 0.25
    if (r2.current) {
      r2.current.rotation.y += delta * 0.18
      r2.current.rotation.x -= delta * 0.08
    }
    if (r3.current) r3.current.rotation.z += delta * 0.12
  })

  return (
    <>
      <mesh ref={r1}>
        <torusGeometry args={[2.05, 0.012, 16, 128]} />
        <meshBasicMaterial color="#e879f9" transparent opacity={0.45} />
      </mesh>
      <mesh ref={r2} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.55, 0.01, 16, 128]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.32} />
      </mesh>
      <mesh ref={r3} rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[3.1, 0.008, 16, 128]} />
        <meshBasicMaterial color="#c084fc" transparent opacity={0.22} />
      </mesh>
    </>
  )
}

export function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 6.2], fov: 48 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={2.4} color="#e879f9" />
      <pointLight position={[-5, -3, -2]} intensity={1.4} color="#7c3aed" />
      <pointLight position={[0, -4, 4]} intensity={0.9} color="#a78bfa" />

      <Suspense fallback={null}>
        <AIOrb />
        <Rings />
        <VoiceBars />
        <OrbitingDots />
        <Sparkles count={120} scale={[8, 5, 8]} size={2} color="#e879f9" speed={0.4} opacity={0.7} />
      </Suspense>
    </Canvas>
  )
}
