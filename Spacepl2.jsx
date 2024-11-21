/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/spacepl2.glb 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

const Spacepl2 = (props) => {
  const group = React.useRef()
  const { scene, animations } = useGLTF('./models/spacepl2.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="SpaceGuy001" geometry={nodes.SpaceGuy001.geometry} material={materials['SpaceGuy.001']} skeleton={nodes.SpaceGuy001.skeleton} />
        </group>
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.002']} position={[2.173, 2.314, 15.264]} rotation={[-0.573, -0.01, -3.137]} />
        <mesh name="SurfPatch" geometry={nodes.SurfPatch.geometry} material={materials['Material.003']} position={[1.844, -1.564, 22.975]} scale={10.17} />
        <mesh name="Landscape001" geometry={nodes.Landscape001.geometry} material={materials['Material.001']} position={[-12.386, 0, 48.933]} scale={[7.421, 7.421, 5.171]} />
      </group>
    </group>
  )
}

export default Spacepl2
useGLTF.preload('./models/spacepl2.glb')
