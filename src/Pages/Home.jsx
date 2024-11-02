import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import Logo from '../components/Logo/Logo'
import Skills from '../components/Skills/Skills'
import LatestWork from '../components/LatestWork/LatestWork'
import ClientsSec from '../components/ClientsSec/ClientsSec'

export default function Home() {
    return (
        <>
            <HomeHero />
            <Logo />
            <Skills />
            <LatestWork />
            <ClientsSec />
        </>
    )
}
