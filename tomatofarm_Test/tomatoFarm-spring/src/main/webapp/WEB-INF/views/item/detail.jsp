<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<c:set var="d" value="${requestScope.dto}" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 폰트어썸 -->
    <script src="https://kit.fontawesome.com/d68045e863.js" crossorigin="anonymous"></script>
    <!-- 폰트 -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <!-- 기본 CSS, JS -->
    <link rel="stylesheet" href="/tomatoFarm/resources/css/00default.css">
    <script defer src="/tomatoFarm/resources/js/00default.js"></script>
    <!-- 헤더 CSS, JS -->
    <link rel="stylesheet" href="/tomatoFarm/resources/css/00header.css">
    <script defer src="/tomatoFarm/resources/js/00header.js"></script>
    <!-- 페이지 CSS, JS -->
    <link rel="stylesheet" href="/tomatoFarm/resources/css/itemDetail.css">
    <script defer src="/tomatoFarm/resources/js/itemDetail.js"></script>
    <title>토마토팜 || ${d.name}</title>
</head>
<body>
    <header id="topBar">
        <div id="loginBar">
            <div class="container">
                <a href="">고객센터</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="/tomatoFarm/member/loginPage">로그인</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="/tomatoFarm/member/signupPage">회원가입</a>
            </div>
        </div>

        <div id="searchBar">
            <div class="container">
                <div id="logoBox">
                    <a href="/tomatoFarm/">
                        <img src="/tomatoFarm/resources/img/logo.png" alt="">
                        <h1>토마토팜 tomatoFarm</h1>
                    </a>
                </div>
                <form id="searchBox" action="/tomatoFarm/item/list">
                    <input oninput="appearinputBoxResetButton(this)" name="keyword" id="searchBoxInput" type="text"
                        placeholder="검색어를 입력해주세요.">
                    <i onclick="resetInputBox(this)" class="fa-solid fa-circle-xmark"></i>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div id="searchRightBox">
                    <div id="myPage">
                        <a href="/tomatoFarm/"><i class="fa-solid fa-user"></i></a>
                    </div>
                    <div id="myCart">
                        <a href="/tomatoFarm/"><i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                    <div id="myItem">
                        <a href="/tomatoFarm/"><i class="fa-solid fa-box-archive"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <nav>
            <div class="container">
                <div id="categoryBox">
                    <div onmouseover="firstCategoryVisible()" id="categoryTag"><i
                            class="fa-solid fa-bars"></i>&nbsp;&nbsp;&nbsp;카테고리</div>
                    <ul onmouseout="firstCategoryHidden()" onmouseover="firstCategoryVisible()" id="firstCategory">
                        <li></li>
                        <li id="firstCategorySearch">
                            <div>
                                <input onkeyup="seachCategory(this)" oninput="appearinputBoxResetButton2(this)"
                                    type="text"><i onclick="resetInputBox2(this)" class="fa-solid fa-circle-xmark"></i>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </li>
                        <li><a href="/tomatoFarm/item/list?keyword=밀키트"><img src="/tomatoFarm/resources/img/category_mealkit.png" alt="category_mealkit">밀키트</a></li>
<c:forEach var="l" items="${sortbList}">
                        <li><a href="/tomatoFarm/item/list?keyword=${l.sortb}"><img src="/tomatoFarm/resources/img/${l.sortcode}.png" alt="${l.sortb}">${l.sortb}</a></li>
</c:forEach>
                    </ul>
                    <ul onmouseout="firstCategoryHidden()" onmouseover="firstCategoryVisible()" id="secondCategory">
                        <li></li>
                        <li id="secondCategorySearch">
                            <div>
                                <input onkeyup="seachCategory(this)" oninput="appearinputBoxResetButton2(this)"
                                    type="text"><i onclick="resetInputBox2(this)" class="fa-solid fa-circle-xmark"></i>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </li>
                        
                        <li><a href="">채소</a></li>
                        <li>과일ㆍ견과ㆍ쌀</li>
                        <li>수산ㆍ해산ㆍ건어물</li>
                        <li>정육ㆍ가공육ㆍ계란</li>
                        <li>국ㆍ반찬ㆍ메인요리</li>
                        <li>간편식ㆍ밀키트ㆍ샐러드</li>
                        <li>면ㆍ양념ㆍ오일</li>
                        <li>생수ㆍ음료ㆍ커피</li>
                        <li>간식ㆍ과자ㆍ떡</li>
                        <li>베이커리</li>
                        <li>유제품</li>

                    </ul>
                </div>
                <ul id="navBar">
                    <li><a href="/tomatoFarm/item/list?keyword=밀키트">밀키트 주문</a></li>
                    <li><a href="">식단 주문</a></li>
                    <li><a href="">재료 주문</a></li>
                    <li><a href="">이벤트</a></li>
                </ul>
            </div>
        </nav>
    </header>
    
    <main id="itemDetailBox" class="container">
        <div id="imgBox">
            <div id="imgBoxImg">
                <img src="/tomatoFarm/resources/img/itemImg/${d.code}_1.jpg" alt="${d.name} 사진">
            </div>
            <div id="imgBoxImgList">
                <div><img src="/tomatoFarm/resources/img/itemImg/${d.code}_1.jpg" alt="${d.name} 조리"></div>
                <div><img src="/tomatoFarm/resources/img/itemImg/${d.code}_2.jpg" alt="${d.name} 제품"></div>
                <div><img src="/tomatoFarm/resources/img/itemImg/${d.code}_3.jpg" alt="${d.name} 구성품"></div>
                <div><img src="/tomatoFarm/resources/img/itemImg/${d.code}_4.jpg" alt="${d.name} 상세표기"></div>
            </div>
        </div>

        <div id="itemDetailSM">
            <div id="itemDetailTitle">
                <div id="title1">새벽배송</div>
                <div id="title2">${d.name}</div>
                <div id="title3">${d.name} 신선하고 맛있어요</div>
<c:if test="${d.discount != 0}">
                <span id="title4">${d.discount}<span>%</span></span>
                <div id="title5">${d.price}원</div>
                <div id="title6">${d.price-(d.price*d.discount/100)}원</div>
</c:if>
<c:if test="${d.discount == 0}">
                <div id="title6">${d.price}원</div>
</c:if>
            </div>
            <div>배송</div>
<c:if test="${d.delivery != 0}">
            <div>${d.delivery}원<br>(23시 전 주문 시 내일 아침 7시 전 도착)</div>
</c:if>
<c:if test="${d.delivery == 0}">
            <div>무료배송<br>(23시 전 주문 시 내일 아침 7시 전 도착)</div>
</c:if>
            <div>제조사</div>
            <div>${d.brand}</div>
            <div>포장타입</div>
            <div>${d.storage}</div>
            <div>판매단위</div>
<c:if test="${d.packing =='pk'}">
            <div>1팩</div>
</c:if>
<c:if test="${d.packing == 'box'}">
            <div>1박스</div>
</c:if>
            <div>중량/용량</div>
            <div>${d.weight}g</div>
            <div>유통기한</div>
            <div>수령일 포함 180일 이상 남은 제품을 보내드립니다.</div>
            <div id="itemSelect">
                <div>수량 선택</div>
                <div id="countBox">
                    <button><i class="fa-solid fa-plus"></i></button>
                    <input type="text">
                    <button><i class="fa-solid fa-minus"></i></button>
                </div>
                <div id="priceBox">
                    <div id="price">총 상품금액&nbsp; : &nbsp;<span>30000원</span></div>
                    <div id="cart">장바구니 담기</div>
                    <div id="buy">구매하기</div>
                </div>
            </div>
        </div>

        
    </main>
    <ul id="detailClick" class="container">
        <li>상품설명</li>
        <li>상세정보</li>
        <li>후기</li>
        <li>문의</li>
    </ul>
    <div id="introItem" class="container">
        <div class="subTitle">
            <hr>
            <h4>상품 조리 사진
                <img src="/tomatoFarm/resources/img/logo3.png" alt="제품 조리 사진">
            </h4>
            <hr>
        </div>
        <img src="/tomatoFarm/resources/img/itemImg/${d.code}_2.jpg" alt="${d.name} 제품">
        <div class="subTitle">
            <hr>
            <h4>상품 구성
                <img src="/tomatoFarm/resources/img/logo4.png" alt="상품 구성">
            </h4>
            <hr>
        </div>
        <img src="/tomatoFarm/resources/img/itemImg/${d.code}_3.jpg" alt="${d.name} 구성품">
        <div class="subTitle">
            <hr>
            <h4>상품 표시사항
                <img src="/tomatoFarm/resources/img/logo2.png" alt="제품 조리 사진">
            </h4>
            <hr>
        </div>
        <img src="/tomatoFarm/resources/img/itemImg/${d.code}_4.jpg" alt="${d.name} 상세표기">
    </div>

</body>
</html>