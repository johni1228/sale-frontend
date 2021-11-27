import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Home: React.FC = () => {

  interface ButtonPros {
    title: string;
  }

  interface CardProps {
    title: string;
    description: string;
  }

  const HomeHeader = styled.div`
    text-align: center;
    line-height: 72px;
    font-size: 45px;
    font-weight: 700;
    color: black;
  `
  const Description = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: 400;
  `
  const Wrapper = styled.div`
    background-color: #f0f0f0;
    color: black;
  `
  const Stylediv = styled.div`
    width: 224px;
    height: 56px;
    color: #806100;
    font-size: 30px;
    font-weight: 400;
  `

  const Button = ({title}: ButtonPros) => {
    return (
      <Stylediv className="bg-white text-center w-224 h-56">
        {title}
      </Stylediv>
    )
  }

  const CardWrapper = styled.div`
    width: 200px;
    height: 200px;
    padding: 30px 20px;
    background-color: white;
    color: black;
  `
  const CardTitie = styled.div`
    font-weight: 700;
    font-size: 50px;
  `
  const CardDesription = styled.div`
    font-weight: 450;
    font-size: 25px;
    text-align: center;
  `

  const Card = ({title, description}: CardProps) => {

    return (
      <CardWrapper className="flex flex-col items-center">
        <CardTitie>{title}</CardTitie>
        <CardDesription>{description}</CardDesription>
      </CardWrapper>
    )
  }


  return (
      <Wrapper className="flex flex-col pt-100 px-200">
        <HomeHeader>The Defi LaunchedPad made for the people!</HomeHeader>
        <Description className="mt-16 mb-30">4Sale is an easy to use launchpad, making it democratic and accessible for everyone to create, participate and research PreSales of tokens</Description>
        <div className="flex justify-around">
          <Button title={'Create Sale'}/>
          <Button title={'Pre Sales'}/>
          <Button title={'Docs'}/>
        </div>
        <div className="mt-90 flex justify-around">
          <Card title="333" description="Sales Made"/>
          <Card title="$40M" description="Liquidity Raised"/>
          <Card title="103" description="Tokens Created"/>
        </div>
      </Wrapper>
  )
}

export default Home;