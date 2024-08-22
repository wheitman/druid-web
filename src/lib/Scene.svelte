<script lang="ts">
    import { T } from "@threlte/core";
    import {
        ContactShadows,
        Float,
        Grid,
        OrbitControls,
    } from "@threlte/extras";
    import {
        AmbientLight,
        DirectionalLight,
        Group,
        PerspectiveCamera,
    } from "three";
    import { tweened } from "svelte/motion";
    import Druid from "$lib/models/druid.svelte";

    import CustomRenderer from "./CustomRenderer.svelte";

    let druid_mesh: Group;
    let beard_influence;
    let mustache_influence;

    setTimeout(() => {
        beard_influence = druid_mesh.children[18].morphTargetInfluences[0];
        mustache_influence = druid_mesh.children[19].morphTargetInfluences[0];
        druid_mesh.children[18].morphTargetInfluences[0] = 0;
        druid_mesh.children[19].morphTargetInfluences[0] = 0;
        beard_influence = 0;
        mustache_influence = 1;
        console.log(druid_mesh.children[18]);
    }, 1000);
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 20]} fov={15}>
    <OrbitControls
        autoRotate
        enableZoom={false}
        enableDamping
        autoRotateSpeed={0}
        target.y={1.5}
    />
</T.PerspectiveCamera>

<T.DirectionalLight
    intensity={2.5}
    position.z={5}
    position.x={15}
    position.y={15}
/>
<T.AmbientLight intensity={0} />

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
    <Druid position.y={-0.5} bind:ref={druid_mesh} />
</Float>

<!-- <Float floatIntensity={1} floatingRange={[0, 1]}>
    <T.Mesh position.y={1}>
        <T.BoxGeometry args={[1, 2, 1]} />
        <T.MeshStandardMaterial color="hotpink" />
    </T.Mesh>
</Float> -->

<style>
</style>
