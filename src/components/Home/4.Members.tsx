import styled from '@emotion/styled'
import Button from 'components/_shared/Button'
import imageLoader from 'libs/loader'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { mobile } from 'styles/media'

type Props = {}
type members = {
  //name: string
  //desc: string
  //role: string
  id: number
  images: string[]
}[]

//27

const members: members = [
  {
    id: 1,
    images: ['/images/members/1.png', '/images/members/1-hover.png'],
  },
  {
    id: 2,
    images: ['/images/members/2.png', '/images/members/2-hover.png'],
  },
  {
    id: 0,
    images: ['/images/members/0.png', '/images/members/0-hover.png'],
  },
  {
    id: 3,
    images: ['/images/members/3.png', '/images/members/3-hover.png'],
  },
  {
    id: 4,
    images: ['/images/members/4.png', '/images/members/4-hover.png'],
  },
  {
    id: 5,
    images: ['/images/members/5.png', '/images/members/5-hover.png'],
  },
  {
    id: 6,
    images: ['/images/members/6.png', '/images/members/6-hover.png'],
  },
  {
    id: 7,
    images: ['/images/members/7.png', '/images/members/7.png'],
  },
  {
    id: 8,
    images: ['/images/members/8.png', '/images/members/8-hover.png'],
  },
  {
    id: 9,
    images: ['/images/members/9.png', '/images/members/9-hover.png'],
  },
  {
    id: 10,
    images: ['/images/members/10.png', '/images/members/10.png'],
  },
  {
    id: 11,
    images: ['/images/members/11.png', '/images/members/11-hover.png'],
  },
  {
    id: 12,
    images: ['/images/members/1.png', '/images/members/1-hover.png'],
  },
  {
    id: 13,
    images: ['/images/members/2.png', '/images/members/2-hover.png'],
  },
  {
    id: 14,
    images: ['/images/members/3.png', '/images/members/3-hover.png'],
  },
  {
    id: 15,
    images: ['/images/members/4.png', '/images/members/4-hover.png'],
  },
]

// 아이콘 형태

const Page = (props: Props) => {
  const router = useRouter()
  const handleClick = (e: any) => {
    router.push('/members')
  }
  return (
    <Wrapper>
      <Title className="container">
        <h1>팀 언틸드의 멤버를 만나보세요.</h1>
        <h3>
          다양한 배경 속에서 참가했지만, 모두들 성장의 즐거움을 느끼고 있어요.
        </h3>
      </Title>
      <MemberListWrapper>
        <MemberList>
          {members.map((member) => (
            <Member images={member.images} key={member.id}></Member>
          ))}
        </MemberList>
        <MemberList>
          {members.map((member) => (
            <Member images={member.images} key={member.id}></Member>
          ))}
        </MemberList>
        <MemberList>
          {members.map((member) => (
            <Member images={member.images} key={member.id}></Member>
          ))}
        </MemberList>
      </MemberListWrapper>
      <Button className="container" onClick={handleClick}>
        더 알아보기
      </Button>

      {/* 이미지를 미리 로드하기 위함 */}
      <PreloadImg>
        {members.map((member) => (
          <div key={member.id}>
            <Image
              src={member.images[0]}
              loader={imageLoader}
              alt=""
              width={1}
              height={1}
            />
            <Image
              src={member.images[1]}
              loader={imageLoader}
              alt=""
              width={1}
              height={1}
            />
          </div>
        ))}
      </PreloadImg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  height: 100vh;
  padding-top: 100px;
  gap: 45px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  & > *:last-child {
    margin-bottom: 45px;
  }

  ${mobile} {
    height: fit-content;
  }
`

const Title = styled.div`
  width: 100%;
  h1 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 40px;
    text-align: center;
  }
  h3 {
    color: #ced4da;
    font-weight: 500;
    text-align: center;
  }
`
const MemberListWrapper = styled.div`
  overflow: hidden;
  /* height: auto; */
  flex-shrink: 0;
`
const MemberList = styled.div`
  width: 100vw;
  overflow: visible;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  &:first-of-type,
  &:last-child {
    transform: translate(-80px, 0px);
  }
`

type Member = {
  images: string[]
}

const Member = styled.div<Member>`
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #212529;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url(${({ images }) => images[0]});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all ease 0.2s 0s;
  &:hover {
    background-image: url(${({ images }) => images[1]});
  }
`

const PreloadImg = styled.div`
  position: absolute;
  overflow: hidden;
  left: -9999px;
  top: -9999px;
  height: 1px;
  width: 1px;
`

export default Page
