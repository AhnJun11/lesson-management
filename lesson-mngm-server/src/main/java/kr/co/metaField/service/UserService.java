package kr.co.metaField.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.metaField.entity.UserEntity;
import kr.co.metaField.mapper.UserMapper;

@Service
public class UserService{
	
	@Autowired
	private UserMapper userMapper;
	
	public int insertUser(UserEntity user) {
		userMapper.insertUser(user);
		user.setId(userMapper.getSearchUser(user));
		return userMapper.insertMember(user);
	}
	
	public String infoUser(UserEntity user) {
		return userMapper.infoUser(user);
	}
	
	public String idCheck(String loginId) {
		return userMapper.idCheck(loginId);
	}
	
	public int registerUser(UserEntity user) {
		return userMapper.registerUser(user);
	}
	
	
}
