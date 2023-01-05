package kr.co.metaField.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.co.metaField.entity.UserEntity;
import kr.co.metaField.service.UserService;

@RestController
@RequestMapping(value ="/usermngm")
public class UserController {
	
	@Autowired
	private UserService userService;
	
//	@GetMapping("/list")
//	public List<UserEntity> getEmployList() {
//		return userService.getEmployeeList();
//	}
	
	@PostMapping("/insert")
	public int insertUser(@RequestBody UserEntity user) {
		System.out.println(user);

		return userService.insertUser(user);
	}
	
	@PostMapping("/info")
	public int infoUser(@RequestBody UserEntity user) {
		if(user.getName().equals(userService.infoUser(user))) {
			return 1;
		}
		return 0;
	}
	
	@GetMapping("/idCheck")
	public int idCheck(@RequestParam("loginId") String loginId) {
		if(userService.idCheck(loginId) == null ) {
			return 1;
		}
		return 0;
	}
	
	@PostMapping("/register")
	public int registerUser(@RequestBody UserEntity user) {
		return userService.registerUser(user);
	}
	
	
	
	

}
