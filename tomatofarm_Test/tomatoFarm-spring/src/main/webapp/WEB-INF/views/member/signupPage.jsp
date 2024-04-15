<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
        <!DOCTYPE html>
        <html>

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
            <!-- 페이지 CSS, JS -->
            <link rel="stylesheet" href="/tomatoFarm/resources/css/signup.css">
            <script defer src="/tomatoFarm/resources/js/signup.js"></script>

            <title>토마토팜 || 회원가입</title>
        </head>

       <body>
    <div id="bodyBG"></div>
    <div id="bodyBG2"></div>
    <main>
        <a href="/tomatoFarm/"><img id="logo" src="/tomatoFarm/resources/img/logo.png"></img></a>
        <h3>회원가입</h3>
        <form id="signUpBox" action="signup" method="post">
            <p id="writeOption"><i class="fa-solid fa-check"></i>&nbsp;&nbsp;필수 입력 사항</p>
            <div id="idBox">
                <i class="fa-solid fa-user"></i>
                <input onkeydown="changeOpacityId(event)" onblur="checkId(event)" onfocus="focusInputBox(event)"
                    type="text" name="id" placeholder="아이디">
            </div>
            <div id="passwordBox">
                <i class="fa-solid fa-key"></i>
                <input onkeydown="changeOpacityPw(event)" onblur="checkPassword(event)" onfocus="focusInputBox(event)"
                    type="password" name="password" placeholder="비밀번호">
            </div>
            <div id="nameBox">
                <i class="fa-solid fa-circle-user"></i>
                <input onkeydown="changeOpacityName(event)" onblur="checkName(event)" onfocus="focusInputBox(event)"
                    type="text" name="name" placeholder="이름">
            </div>
            <div id="phonenumberBox">
                <i class="fa-solid fa-phone"></i>
                <input onkeydown="changeOpacityPn(event)" onblur="checkPhonenumber(event)"
                    onfocus="focusInputBox(event)" type="text" name="phonenumber" placeholder="전화번호">
            </div>
            <p id="errorBox">
                <span id="idError"></span>
                <span id="pwError"></span>
                <span id="nameError"></span>
                <span id="pnError"></span>
            </p>
            <p id="selectOption"><i class="fa-solid fa-check"></i>&nbsp;&nbsp;선택 입력 사항</p>
            <div id="addressBox">
                <i class="fa-solid fa-location-dot"></i>
                <input onkeydown="changeOpacityAddress(event)" type="text" name="address" placeholder="주소">
            </div>
            <div id="emailBox">
                <i class="fa-solid fa-envelope"></i>
                <input onkeydown="changeOpacityEmail(event)" type="text" name="email" placeholder="이메일"><i
                    class="fa-solid fa-at"></i>
                <input onkeydown="changeOpacityEmail(event)" type="text" name="emailback" id="emailWriteBox">
                <select onchange="changeSelectBox(event)" name="emailback" id="emailSelectBox">
                    <option>이메일 선택</option>
                    <option value="naver.com">naver.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="google.com">google.com</option>
                    <option value="nate.com">nate.com</option>
                    <option value=",">직접입력</option>
                </select>
            </div>
            <div id="genderBox">
                <i class="fa-solid fa-person-half-dress"></i>
                <span>성별</span>
                <ul id="genderUl">
                    <label>
                        <li>
                            <input onkeydown="changeOpacity(event)" onclick="selectGender(event)" type="radio"
                                name="gender" value="남성">남자
                        </li>
                    </label>
                    <label>
                        <li>
                            <input onkeydown="changeOpacity(event)" onclick="selectGender(event)" type="radio"
                                name="gender" value="여성">여자
                        </li>
                    </label>
                </ul>
            </div>
            <div id="birthdayBox">
                <i class="fa-solid fa-cake-candles"></i>
                <input onkeydown="changeOpacity2(event)" type="text" name="year" placeholder="yyyy" maxlength="4">
                <input onkeydown="changeOpacity2(event)" type="text" name="month" placeholder="mm" maxlength="2">
                <input onkeydown="changeOpacity2(event)" type="text" name="day" placeholder="dd" maxlength="2">
            </div>
            <button id="joinBox" disabled>가입하기</button>
        </form>
        <br>
        <p id="successOrNot">
            <c:if test="${!empty successOrNot}">
                  <i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;${successOrNot}
            </c:if>
        </p>
    </main>
</body>

        </html>
        
        