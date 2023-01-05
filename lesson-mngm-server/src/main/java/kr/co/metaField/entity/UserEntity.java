package kr.co.metaField.entity;

import java.sql.Date;

import lombok.Data;

@Data
public class UserEntity {
	private Integer id;
	private String name;
	private Integer positionId;
	private String phoneNumber;
	private Integer shopId;
	private Date createAt;
	private Integer userNumber;
	private String loginId;
	private String loginPwd;
	private String email;
	private Date birthday;
	private String address;
	private String gender;
	private Date resignationDate;
	private String centerMemo;
	private String proMemo;
	private String recommender;
	private String job;
	private String inflowRoute;
}
