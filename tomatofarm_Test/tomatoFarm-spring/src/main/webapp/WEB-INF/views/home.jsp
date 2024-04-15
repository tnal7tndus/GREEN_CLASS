<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 폰트어썸 -->
    <script src="https://kit.fontawesome.com/d68045e863.js" crossorigin="anonymous"></script>
    <!-- 구글 폰트 -->
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
    <link rel="stylesheet" href="/tomatoFarm/resources/css/home.css">
    <script defer src="/tomatoFarm/resources/js/home.js"></script>
    <title>토마토팜 || 메인</title>
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

    <div id="adImgBox">
        <div id="adImg" class="container">
            <div id="adRightTab">
                <div>프레시지<img src="/tomatoFarm/resources/img/brand/fresheasy.png"></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>

    <div id="firstContainer" class="container">
        <h3><i class="fa-solid fa-star"></i>&nbsp;&nbsp; 토마토팜 바로가기 &nbsp;&nbsp;<i class="fa-solid fa-star"></i></h3>
        <div id="firstContainerButton">
            <div><a href=""><img src="/tomatoFarm/resources/img/index_bestSeller.png" alt="" class="categoryImg"><br>베스트 상품</a></div>
            <div><a href="item/list?keyword=밀키트"><img src="/tomatoFarm/resources/img/index_mealkit.png" alt="mealkit" class="categoryImg"><br>밀키트</a></div>
            <div><a href=""><img src="/tomatoFarm/resources/img/index_food.png" alt="" class="categoryImg"><br>신선 재료</a></div>
            <div><a href=""><img src="/tomatoFarm/resources/img/index_menu.png" alt="" class="categoryImg"><br>메뉴 주문</a></div>
            <div><a href=""><img src="/tomatoFarm/resources/img/index_cooking.png" alt="" class="categoryImg"><br>조리 도구</a></div>
            <div><a href=""><img src="/tomatoFarm/resources/img/index_gift.png" alt="" class="categoryImg"><br>이벤트</a></div>
        </div>
    </div>

    <hr>

    <div id="secondContainer" class="container">
        <h3><i class="fa-solid fa-gift"></i> &nbsp;&nbsp;특가 상품&nbsp;&nbsp; <i class="fa-solid fa-gift"></i></h3>
        <div id="secondContainerList">
            <div class="slideBox">
<c:forEach var="l" items="${eventItemList}" begin="8" end="10">
                <a href="item/detail?code=${l.code}" class="itemBox">
                    <img src="/tomatoFarm/resources/img/itemImg/${l.code}_1.jpg" alt="${l.name}">
                    <div class="itemName">${l.name}</div>
                    <div class="itemInfo">${l.brand}<br></div>
                    <p class="itemPrice">${l.price}원</p>
                    <div class="itemOption">무료배송</div>
                </a>
</c:forEach>
<c:forEach var="l" items="${eventItemList}" begin="0" end="10">
                <a href="item/detail?code=${l.code}" class="itemBox">
                    <img src="/tomatoFarm/resources/img/itemImg/${l.code}_1.jpg" alt="${l.name}">
                    <div class="itemName">${l.name}</div>
                    <div class="itemInfo">${l.brand}<br></div>
                    <p class="itemPrice">${l.price}원</p>
                    <div class="itemOption">무료배송</div>
                </a>
</c:forEach>
<c:forEach var="l" items="${eventItemList}" begin="0" end="2">
                <a href="item/detail?code=${l.code}" class="itemBox">
                    <img src="/tomatoFarm/resources/img/itemImg/${l.code}_1.jpg" alt="${l.name}">
                    <div class="itemName">${l.name}</div>
                    <div class="itemInfo">${l.brand}<br></div>
                    <p class="itemPrice">${l.price}원</p>
                    <div class="itemOption">무료배송</div>
                </a>
</c:forEach>
            </div>
            <div id="secondSlideBtn" onclick="secondContainerSlideBtn(event)">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div id="secondSlideBtnSelected"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div id="secondContainerLeftBtn" onclick="secondContainerSlideLeftbth(event)"><i
                    class="fa-sharp fa-solid fa-arrow-left"></i></div>
            <div id="secondContainerRightBtn" onclick="secondContainerSlideRightbth(event)"><i
                    class="fa-sharp fa-solid fa-arrow-right"></i></div>

        </div>
    </div>

    <hr>

    <div id="thirdContainer" class="container hide transition1">
        <h3 class="hide transition1"><i class="fa-solid fa-bag-shopping"></i> &nbsp;&nbsp; 상품 보기 &nbsp;&nbsp; <i
                class="fa-solid fa-bag-shopping"></i></h3>
        <div class="typeBox hide transition1">
            <div class="typeBoxTag">
                <div class="typeBoxTagTitle"><img src="/tomatoFarm/resources/img/brand/fresheasy.png"
                        alt="category_vitamin">프레시지</div>
                <ul class="typeBoxTagList">
                    <li><a href="item/list?keyword=스테이크">스테이크</a></li>
                    <li><a href="item/list?keyword=파스타">파스타</a></li>
                    <li><a href="item/list?keyword=감바스">감바스</a></li>
                </ul>
            </div>
<c:forEach var="l" items="${requestScope.fresheasyList}" begin="0" end="0">
            <a href="item/detail?code=${l.code}" class="typeBoxImg">
                <img src="/tomatoFarm/resources/img/itemImg/${l.code}_1.jpg" alt="${l.name}">
                <div class="typeBoxImgTitle">
                    <div class="typeBoxImgTitleName">
                        ${l.name}
                    </div>
                    <p class="typeBoxImgTitlePrice">${l.price}원</p>
                </div>
                <div class="typeBoxImgTitleBest">Best 상품</div>
            </a>
</c:forEach>
            <div class="typeBoxList">
                <div class="slideBox">
<c:forEach var="l" items="${requestScope.fresheasyList}" begin="1" end="8">
                    <a href="item/detail?code=${l.code}" class="itemBox">
                        <img src="/tomatoFarm/resources/img/itemImg/${l.code}_1.jpg" alt="${l.name}">
                        <div class="itemName">${l.name}</div>
                        <div class="itemInfo">${l.brand}<br></div>
                        <p class="itemPrice">${l.price}원</p>
                        <div class="itemOption">무료배송</div>
                    </a>
</c:forEach>
                    <a href="item/list?keyword=프레시지" class="linkBox">
                        <p>" 프레시지 "</p>
                        <i class="fa-regular fa-circle-play"></i> 상품 더 보러가기
                    </a>
                </div>
                <div onclick="thirdContainerSlideLeftBth(event)" class="thirdContainerLeftBtn">
                    <i class="fa-sharp fa-solid fa-arrow-left"></i>
                </div>
                <div onclick="thirdContainerSlideRightBth(event)" class="thirdContainerRightBtn">
                    <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
        <div class="typeBox hide transition1">
            <div class="typeBoxTag">
                <div class="typeBoxTagTitle"><img src="/tomatoFarm/resources/img/brand/rlarndnjstjstodenqn.png"
                        alt="category_vitamin">김구원선생
                </div>
                <ul class="typeBoxTagList">
                    <li><a href="item/list?keyword=두부">두부</a></li>
                    <li><a href="item/list?keyword=찌개">찌개</a></li>
                </ul>
            </div>
<c:forEach var="l" items="${requestScope.rlarndnjstjstodList}" begin="0" end="0">
            <a href="item/detail?code=${l.code}" class="typeBoxImg">
                <img src="/tomatoFarm/resources/img/itemImg/${l.code}_1.jpg" alt="${l.name}">
                <div class="typeBoxImgTitle">
                    <div class="typeBoxImgTitleName">
                        ${l.name}
                    </div>
                    <p class="typeBoxImgTitlePrice">${l.price}원</p>
                </div>
                <div class="typeBoxImgTitleBest">Best 상품</div>
            </a>
</c:forEach>
            <div class="typeBoxList">
                <div class="slideBox">
<c:forEach var="l" items="${requestScope.rlarndnjstjstodList}" begin="1" end="8">
                    <a href="item/detail?code=${l.code}" class="itemBox">
                        <img src="/tomatoFarm/resources/img/itemImg/${l.code}_1.jpg" alt="${l.name}">
                        <div class="itemName">${l.name}</div>
                        <div class="itemInfo">${l.brand}<br></div>
                        <p class="itemPrice">${l.price}원</p>
                        <div class="itemOption">무료배송</div>
                    </a>
</c:forEach>
                    <a href="item/list?keyword=김구원선생" class="linkBox">
                        <p>" 김구원선생 "</p>
                        <i class="fa-regular fa-circle-play"></i> 상품 더 보러가기
                    </a>
                </div>
                <div onclick="thirdContainerSlideLeftBth(event)" class="thirdContainerLeftBtn">
                    <i class="fa-sharp fa-solid fa-arrow-left"></i>
                </div>
                <div onclick="thirdContainerSlideRightBth(event)" class="thirdContainerRightBtn">
                    <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
        <div class="typeBox hide transition1">
            <div class="typeBoxTag">
                <div class="typeBoxTagTitle"><img src="/tomatoFarm/resources/img/brand/마이셰프.png"
                        alt="category_vitamin">마이셰프</div>
                <ul class="typeBoxTagList">
                    <li><a href="item/list?keyword=파스타">파스타</a></li>
                    <li><a href="item/list?keyword=밀키트">밀키트</a></li>
                </ul>
            </div>
<c:forEach var="l" items="${requestScope.mychefList}" begin="0" end="0">
            <a href="item/detail?code=${l.code}" class="typeBoxImg">
                <img src="/tomatoFarm/resources/img/itemImg/${l.code}_1.jpg" alt="${l.name}">
                <div class="typeBoxImgTitle">
                    <div class="typeBoxImgTitleName">
                        ${l.name}
                    </div>
                    <p class="typeBoxImgTitlePrice">${l.price}원</p>
                </div>
                <div class="typeBoxImgTitleBest">Best 상품</div>
            </a>
</c:forEach>
            <div class="typeBoxList">
                <div class="slideBox">
<c:forEach var="l" items="${requestScope.mychefList}" begin="1" end="8">
                    <a href="item/detail?code=${l.code}" class="itemBox">
                        <img src="/tomatoFarm/resources/img/itemImg/${l.code}_1.jpg" alt="${l.name}">
                        <div class="itemName">${l.name}</div>
                        <div class="itemInfo">${l.brand}<br></div>
                        <p class="itemPrice">${l.price}원</p>
                        <div class="itemOption">무료배송</div>
                    </a>
</c:forEach>
                    <a href="item/list?keyword=마이셰프" class="linkBox">
                        <p>" 마이셰프 "</p>
                        <i class="fa-regular fa-circle-play"></i> 상품 더 보러가기
                    </a>
                </div>
                <div onclick="thirdContainerSlideLeftBth(event)" class="thirdContainerLeftBtn">
                    <i class="fa-sharp fa-solid fa-arrow-left"></i>
                </div>
                <div onclick="thirdContainerSlideRightBth(event)" class="thirdContainerRightBtn">
                    <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    </div>

</body>

</html>