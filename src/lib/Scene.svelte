<script>
    import { T } from "@threlte/core";
    import {
        ContactShadows,
        Float,
        Grid,
        OrbitControls,
    } from "@threlte/extras";
    import { AmbientLight, DirectionalLight, PerspectiveCamera } from "three";
    import Druid from "$lib/models/druid.svelte";
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 20]} fov={15}>
    <!-- <OrbitControls
        autoRotate
        enableZoom={false}
        enableDamping
        autoRotateSpeed={0}
        target.y={1.5}
    /> -->
</T.PerspectiveCamera>

<T.DirectionalLight intensity={1.8} position.x={15} position.y={10} />
<T.AmbientLight intensity={2.5} />

<!-- <Grid
    position.y={-0.001}
    cellColor="#ffffff"
    sectionColor="#ffffff"
    sectionThickness={0}
    fadeDistance={25}
    cellSize={2}
/> -->

<!-- <ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} /> -->

<Float floatIntensity={1} floatingRange={[0, 0.3]} speed={4}>
    <Druid position.y={-2.5} />
</Float>

<!-- <Float floatIntensity={1} floatingRange={[0, 1]}>
    <T.Mesh position.y={1}>
        <T.BoxGeometry args={[1, 2, 1]} />
        <T.MeshStandardMaterial color="hotpink" />
    </T.Mesh>
</Float> -->

<style>
</style>
