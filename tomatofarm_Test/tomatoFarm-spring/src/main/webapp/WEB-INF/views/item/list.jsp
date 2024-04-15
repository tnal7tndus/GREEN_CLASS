<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- 폰트어썸 -->
<script src="https://kit.fontawesome.com/d68045e863.js"
	crossorigin="anonymous"></script>
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
<script defer type="text/javascript"
	src="/tomatoFarm/resources/js/00header.js"></script>
<!-- 페이지 CSS, JS -->
<link rel="stylesheet" href="/tomatoFarm/resources/css/itemList.css">
<script defer type="text/javascript"
	src="/tomatoFarm/resources/js/itemList.js"></script>
<title>토마토팜 || 상품검색</title>


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
	<div id="searchTitle" class="container">
		"<b>${requestScope.keyword}</b>"<span>에 대한 검색 결과</span>
	</div>
	<!-- <h2>신상품</h2>
    <aside>카테고리</aside> -->
	<main class="container">
		<div id="listfilter">
			<ul>
				<li><i class="fa-regular fa-circle-check"></i>밀키트
					<ul>
						<c:forEach var="l" items="${requestScope.brandList}">
							<li><i class="fa-regular fa-circle-check"></i>${l.brand}</li>
						</c:forEach>
					</ul>
					<hr></li>
				<li><i class="fa-regular fa-circle-check"></i>식재료
					<ul>
						<c:forEach var="l" items="${requestScope.sortbList}">
							<li><i class="fa-regular fa-circle-check"></i>${l.sortb} <c:forEach
									var="m" items="${requestScope.sortList}">
									<ul>
										<c:if test="${l.sortb==m.sortb}">
											<li><i class="fa-regular fa-circle-check"></i>${m.sortc}</li>
										</c:if>
									</ul>
								</c:forEach>
						</c:forEach>
					</ul>
					<hr></li>

				<li><i class="fa-regular fa-circle-check"></i>행사
					<ul>
						<li><i class="fa-regular fa-circle-check"></i>채선당</li>
						<li><i class="fa-regular fa-circle-check"></i>도리깨침</li>
					</ul>
					<hr></li>
				<li id="filterPrice"><i class="fa-regular fa-circle-check"></i>가격
					<div>
						<input type="text" placeholder="0 원">
						&nbsp;&nbsp;~&nbsp;&nbsp; <input type="text"
							placeholder="1000000 원">
					</div></li>
			</ul>
		</div>
		<div id="container">
			<div id="containerOption">
				<div id="total">
					총 <span>${requestScope.size}</span> 개
				</div>
				<div id="listOption">
					<div>최신상품순</div>
					<!-- item/sortlist 요청 -->
					<div>인기상품순</div>
					<div>가격낮은순</div>
					<div>가격높은순</div>
				</div>
			</div>

			<c:forEach items="${requestScope.list}" var="l">
				<a href="detail?code=${l.code}">
					<div class="itemBox">
						<img src="/tomatoFarm/resources/img/itemImg/${l.code}_1.jpg"
							alt="${l.name}">
						<div class="itemName">${l.name}</div>
						<div class="itemInfo">${l.brand}<br>
						</div>
						<p class="itemPrice">${l.price}원</p>
						<div class="itemOption">${l.delivery==0?"무료배송":l.delivery+=' 원'}</div>
					</div>
				</a>
			</c:forEach>


			<div align="center">
<!-- ** Paging Block ** 
	=> ver01: QueryString 수동 입력 -> 자동생성 makeQuery 메서드 적용
	=> ver02: makeQuery메서드 -> searchQuery메서드 로 변경
 	 1) FirstPage, Prev  
 	 => 수동입력(Old)
 	 	<a href="bPageList?currPage=1&rowsPerPage=5">FP</a>&nbsp;
		<a href="bPageList?currPage=${pageMaker.spageNo-1}&rowsPerPage=5">&LT;</a>&nbsp;&nbsp;
	 => 자동생성(makeQuery)
 	 -->
  <c:choose>
	<c:when test="${(pageMaker.currPage >= pageMaker.spageNo) && pageMaker.spageNo > 1}">
	<!-- ver01 : 자동생성(makeQuery) 
		<a href="bPageList${pageMaker.makeQuery(1)}">FP</a>&nbsp;
		<a href="bPageList${pageMaker.makeQuery(pageMaker.spageNo-1)}">&LT;</a>&nbsp;&nbsp;
	-->
	<!-- ver02 : searchQuery 메서드 사용 -->
		<a href="${pageMaker.searchQuery(1)}">FP</a>&nbsp;
		<a href="${pageMaker.searchQuery(pageMaker.spageNo-1)}">&LT;</a>&nbsp;&nbsp;
	</c:when>	
	<c:otherwise>
		<font color="Gray">FP&nbsp;&LT;&nbsp;&nbsp;</font>
	</c:otherwise>
  </c:choose> 	 
<!-- 2) Display PageNo 
	=> currPage 제외한 PageNo 만 a Tag 적용 -->
  <c:forEach var="i" begin="${pageMaker.spageNo}" end="${pageMaker.epageNo}">
  	<c:if test="${i==pageMaker.currPage}">
  		<font color="Orange" size="5"><b>${i}</b></font>&nbsp;
  	</c:if>
  	<c:if test="${i!=pageMaker.currPage}">
  		<a href="mPageList${pageMaker.searchQuery(i)}">${i}</a>&nbsp;
  	</c:if>
  </c:forEach>
<!-- 3) Next, LastPage  -->
  <c:choose>
  	<c:when test="${(pageMaker.currPage >= pageMaker.epageNo) && pageMaker.epageNo>0}">
  		&nbsp;<a href="mPageList${pageMaker.searchQuery(pageMaker.epageNo+1)}">&GT;</a>
  		&nbsp;<a href="mPageList${pageMaker.searchQuery(pageMaker.lastPageNo)}">LP</a>
  	</c:when>
  	<c:otherwise>
  		<font color="Gray">&nbsp;&GT;&nbsp;LP</font>
  	</c:otherwise>
  </c:choose>
</div>

		</div>
	</main>
</body>

</html>