package kr.co.metaField.entity;

import java.sql.Date;

import lombok.Data;

@Data
public class MemberEntity {
	private Integer id;
	private Integer userId;
	private String loginId;
	private String loginPwd;
	private String email;
	private Date birthDay;
	private String address;
	private String gender;
	private String centerMemo;
	private String proMemo;
	private String recommender;
	private String job;
	private String inflowRoute;
	private Integer employeeId;
}
