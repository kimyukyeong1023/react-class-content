import React from 'react'
import ProductCard from '../../component/ProductCard'

export default function MinimalPage() {

  return (
    <div>


         {/* <!-- GNB 헤더 네비게이션 --> */}
    <header className="header">
        <div className="container header-wrap">
            {/* <!-- 로고 --> */}
            <a href="#" className="logo">
                MINIMAL.
            </a>

            {/* <!-- 메인 메뉴 --> */}
            <nav className="nav-menu">
                <a href="#" className="nav-link active">HOME</a>
                <a href="#shop-section" className="nav-link">SHOP</a>
                <a href="#" className="nav-link">EDITORIAL</a>
                <a href="#" className="nav-link">ABOUT</a>
            </nav>

            {/* <!-- 유틸 버튼 아이콘 패널 --> */}
            <div className="icon-panel">
                <button className="icon-btn" aria-label="Search">
                    <i data-lucide="search"></i>
                </button>
                <button className="icon-btn" aria-label="Cart">
                    <i data-lucide="shopping-bag"></i>
                </button>
            </div>
        </div>
    </header>

    {/* <!-- 히어로 배너 영역 --> */}
    <section className="hero">
        <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=80" 
                 alt=""/>
            <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content">
            <div className="hero-text-wrap">
                <p className="hero-tag">New Season Arrivals</p>
                <h1 className="hero-title">
                    The Art of <br/><span>Simplicity.</span>
                </h1>
                <p className="hero-desc">
                    자연스러운 실루엣과 오래 입어도 질리지 않는 최상의 원단을 추구하는 미니멀 아카이브 컬렉션입니다.
                </p>
                <div className="hero-btn-container">
                    <a href="#shop-section" className="hero-btn">
                        Shop Collection
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- 메인 숍 섹션 --> */}
    <main id="shop-section" className="container shop-section">
        
        {/* <!-- 카테고리 내비게이션 헤더 --> */}
        <div className="shop-header">
            <div className="shop-title-wrap">
                <h2>Our Collection</h2>
                <p>간결한 실루엣의 데일리 아이템들을 만나보세요.</p>
            </div>
            
            <div className="category-tabs">
                <button className="category-tab active">ALL</button>
                <button className="category-tab">TOPS</button>
                <button className="category-tab">BOTTOMS</button>
                <button className="category-tab">OUTERWEAR</button>
                <button className="category-tab">ACC</button>
            </div>
        </div>

        {/* <!-- 상품 그리드 목록 --> */}
        <div className="product-grid">
            
            {/* <!-- 상품 1 --> */}
            <ProductCard
                image="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=60"
                category="Tops"
                title="시그니처 미니멀 실루엣 T셔츠"
                price="₩ 39,000"
            />
            

            {/* <!-- 상품 2 --> */}
                <ProductCard
                image="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=60" 
                category="Outerwear"
                title="클래식 가죽 바이커 자켓"
                price="₩ 289,000"
            />
           

            {/* <!-- 상품 3 --> */}
                <ProductCard
                image="https://images.unsplash.com/photo-1534215754734-18e55d13ce35?w=600&auto=format&fit=crop&q=60"
                category="Accessories"
                title="비건 샌드코트 베이지 캡"
                price="₩ 29,000"
            />


            {/* <!-- 상품 4 --> */}
                <ProductCard
                image="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=60" 
                category="Bottoms"
                title="스탠다드 생지 와이드 "
                price="₩ 89,000"
            />
            
            {/* <!-- 상품 5 --> */}
                <ProductCard
                image="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=60" 
                category="Tops"
                title="소프트 파인울 니트웨어"
                price="₩ 68,000"
            />
          

            {/* <!-- 상품 6 --> */}
                <ProductCard
                image="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60" 
                category="Accessories"
                title="모노 라이트 어반 스니커즈"
                price="₩ 139,000"
            />
         

            {/* <!-- 상품 7 --> */}
                <ProductCard
                image="https://images.unsplash.com/photo-1544923246-77307dd654cb?w=600&auto=format&fit=crop&q=60" 
                category="Outerwear"
                title="시그니처 롱 더블 블렌드 코트"
                price="₩ 340,000"
            />

            {/* <!-- 상품 8 --> */}
                <ProductCard
                image="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=600&auto=format&fit=crop&q=60" 
                         alt="" 
                category="Bottoms"
                title="에센셜 코튼 치노 팬츠"
                price="₩ 59,000"
            />
        

        </div>
    </main>

    {/* <!-- 푸터 영역 --> */}
    <footer className="footer">
        <div className="container footer-grid">
            {/* <!-- 브랜드 정보 --> */}
            <div className="footer-col">
                <h3>MINIMAL.</h3>
                <p className="footer-desc">
                    단순한 트렌드를 넘어 오랫동안 소장 가치를 가질 수 있는 의류를 선별하여 제공합니다.
                </p>
                <div className="social-links">
                    <a href="#" className="social-link"><i data-lucide="instagram"></i></a>
                    <a href="#" className="social-link"><i data-lucide="facebook"></i></a>
                    <a href="#" className="social-link"><i data-lucide="twitter"></i></a>
                </div>
            </div>

            {/* <!-- 고객 서비스 정보 --> */}
            <div className="footer-col">
                <h4>CS Center</h4>
                <ul className="footer-list">
                    <li>1544-0000</li>
                    <li>Open: 10:00 AM - 05:00 PM</li>
                    <li>Lunch: 12:00 PM - 01:00 PM</li>
                    <li>Sat, Sun, Holiday Off</li>
                </ul>
            </div>

            {/* <!-- 약관 및 안내 링크 --> */}
            <div className="footer-col">
                <h4>Guide</h4>
                <ul className="footer-list">
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보처리방침</a></li>
                    <li><a href="#">배송 및 교환/반품 안내</a></li>
                    <li><a href="#">입점 및 제휴 제안</a></li>
                </ul>
            </div>

            {/* <!-- 뉴스레터 구독 양식 --> */}
            <div className="footer-col">
                <h4>Newsletter</h4>
                <div className="newsletter-wrap">
                    <p className="footer-desc">신규 런칭 및 할인 소식을 가장 먼저 받아보세요.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="이메일 주소를 입력해 주세요" className="newsletter-input"/>
                        <button className="newsletter-btn">Join</button>
                    </div>
                </div>
            </div>
        </div>
        
        {/* <!-- 푸터 하단 저작권 정보 --> */}
        <div className="container footer-bottom">
            <p>© 2026 MINIMAL Inc. All rights reserved.</p>
            <p>Made with Minimalist Aesthetic & Clean CSS.</p>
        </div>
    </footer>


    </div>
  )
}
