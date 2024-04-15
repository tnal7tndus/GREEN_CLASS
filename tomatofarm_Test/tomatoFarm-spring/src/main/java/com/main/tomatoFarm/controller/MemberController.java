package com.main.tomatoFarm.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.main.tomatoFarm.domain.MemberDTO;
import com.main.tomatoFarm.service.MemberService;

@Controller
@RequestMapping(value = "/member")
public class MemberController {
	@Autowired(required = false)
	MemberService memberservice;
	
	// login page
	@GetMapping("/loginPage")
	public void loginPage() {	};
	
	// login -> home
	@PostMapping("login")
	public String login(HttpSession session, Model model, MemberDTO dto, RedirectAttributes attr) {

		String uri = "member/loginPage";
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		MemberDTO dbDTO = memberservice.selectOne(dto.getId());
		String insertedPw = dto.getPassword();
		
		if (dbDTO != null) {
			String clientPw = dbDTO.getPassword();
			if (encoder.matches(insertedPw, clientPw)){
				// 로그인 성공
				session.setAttribute("memberDTO", dbDTO);
				uri = "/home";
			} else {
				// PW 틀림
				attr.addFlashAttribute("successOrNot", "비밀번호를 확인해주세요");
			}
		} else {
			attr.addFlashAttribute("successOrNot", "아이디를 확인해주세요");
		}
		return "redirect:/" + uri;
	}
	
	// signUp page
	@GetMapping("/signupPage")
	public void singupPage() {	};
	
	
	// signUp 
	@PostMapping("/signup")
	public String singup(Model model, MemberDTO dto, @RequestParam("year") String year,@RequestParam("month") String month, @RequestParam("day") String day) {
		
		
		String uri = "member/loginPage";
		if(dto.getPassword().length() < 4 || dto.getPassword().length() > 15) {
			return "redirect:/" + uri;	
		}
		//=======================================================
		String pwd = dto.getPassword();
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String encodedPwd = encoder.encode(pwd);
		dto.setPassword(encodedPwd);
		//=======================================================		
		dto.setBirthday(year+"-"+month+"-"+day);
		if(memberservice.insert(dto)>0) {
			uri="member/signup_Success";
			
		}else {
			uri="member/signupPage";
		}
		return "redirect:/" + uri;	
	}
}
