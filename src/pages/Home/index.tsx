import { faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import { Page } from 'components/Page'
import React, { useState, useEffect, ElementType, ComponentProps} from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Home: React.FC = () => {

  const history = useHistory()

  interface ButtonPros extends ComponentProps<"button">{
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
    padding: 100px, 200px, 0px, 200px;
  `
  const Stylediv = styled.div`
    cursor: pointer;
    width: 224px;
    height: 56px;
    color: #806100;
    font-size: 30px;
    font-weight: 400;
  `

  const Button =({title}: ButtonPros): JSX.Element => {
    return (
      <Stylediv className="bg-white text-center w-224 h-56 mb-10">
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
      <CardWrapper className="flex flex-col items-center mb-10">
        <CardTitie>{title}</CardTitie>
        <CardDesription>{description}</CardDesription>
      </CardWrapper>
    )
  }

  const handle = (title: string) => {
    return history.push(title)
  }

  return (
      <Wrapper className="flex flex-col sm:flex-grow w-full p-40 min-h-full">
        <HomeHeader className="msm:hidden sm:block">The Defi LaunchedPad made for the people!</HomeHeader>
        <Description className="mt-16 msm:hidden sm:block">4Sale is an easy to use launchpad, making it democratic and accessible for everyone to create, participate and research PreSales of tokens</Description>
        <div className="flex msm:flex-col sm:flex-row sm:justify-around mt-30 msm: items-center">
          <Button title={'Create Sale'} onClick={()=> {window.alert("adsf")}} />
          <Button title={'Pre Sales'}/>
          <Button title={'Docs'}/>
        </div>
        <div className="mt-90 flex msm:flex-col sm:flex-row sm:justify-around msm: items-center">
          <Card title="333" description="Sales Made"/>
          <Card title="$40M" description="Liquidity Raised"/>
          <Card title="103" description="Tokens Created"/>
        </div>
      </Wrapper>
  )
}

export default Home;