//NaverBlogPage.jsx

import React from 'react'
import BlogCard from '../component/BlogCard'

export default function NaverBlogPage() {
  return (
    <div className='wrap'>
    <div className='blog-page'>
        <h1 className='h1-logo'>Naver BLog</h1>
        <nav>
            <hr />
            <ul className='nav-list'>
                <li>전체</li>
                <li>좋은글·이미지</li>
                <li>맛집</li>
                <li>공연·전시</li>
                <li>드라마</li>
                <li>게임</li>
                <li>패션·미용</li>
                <li>미술·디자인</li>
            </ul>
            <hr />
        </nav>
        <main>
            <BlogCard 
                title="공주 글램핑장 천안아산 근교 정안 글램핑"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae quis quo consectetur veniam qui animi, hic alias numquam aspernatur similique nostrum ratione assumenda cum, quia nisi laboriosam quasi repudiandae!"
                image="https://postfiles.pstatic.net/MjAyNjA2MjJfMjY1/MDAxNzgyMTA1MDY3NDEw.YfyakN5E98zom7gQJ1PGwJs2kBPrq51sDfctD4MJdqAg.X6G_q4MwvX_Wqno735X8Pa30NtcFsR3O54fyyc3uq48g.PNG/900_%EC%97%AC%ED%96%89_%EC%82%AC%EC%A7%84_%EB%B0%B0%EA%B2%BD_%EA%B5%AD%EB%82%B4%EC%97%AC%ED%96%89_%EC%B6%94%EC%B2%9C_%EC%9E%A5%EC%86%8C_%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8_%EA%B2%8C%EC%8B%9C%EB%AC%BC_20260622_140947_0000.png?type=w966"
            />
            <BlogCard 
                title="월드컵 풍선 스퀴시 / 월드컵 만들기 / 스퀴시 무료 도안"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae quis quo consectetur veniam qui animi, hic alias numquam aspernatur similique nostrum ratione assumenda cum, quia nisi laboriosam quasi repudiandae!"
                image="https://postfiles.pstatic.net/MjAyNjA2MjFfMTk1/MDAxNzgyMDI3NjU3MjQ3.TUuqd_r6qj53ZtiqOCQ4c1gzVeb5cQ-asSBAyGYwB9wg.CHERxAisuIM5Qn5ABmvZTJ1Pe14s3UknQ3wXsXo5ldsg.PNG/%EC%A0%9C%EB%AA%A9%EC%9D%84_%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94..png?type=w966"
            />
            <BlogCard 
                title="포켓몬 챔피언스 포챔스 메가라이츄Y 샘플 랭크 게임 실전 강의"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae quis quo consectetur veniam qui animi, hic alias numquam aspernatur similique nostrum ratione assumenda cum, quia nisi laboriosam quasi repudiandae!"
                image="https://postfiles.pstatic.net/MjAyNjA2MjJfNTgg/MDAxNzgyMDk4NTA4MDU5.nqONg_JVsMoqyt_ToRPUjiLDXXS6ZGILp-ysHCIEf5Ug.LUdiUI0986j-7aFfoLXmlgTKhOea2iy9YshmTsWVCuUg.JPEG/20260619_131248.jpg?type=w466"
            />
            

            
            
        </main>

    </div>
    </div>
  )
}