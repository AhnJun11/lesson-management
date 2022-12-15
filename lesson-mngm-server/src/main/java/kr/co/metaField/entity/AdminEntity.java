package kr.co.metaField.entity;

import java.sql.Date;

import lombok.Data;

@Data
public class AdminEntity {
	private Integer id;
	private String name;
	private String phoneNumber;
	private String loginId;
	private String loginPwd;
	private Date registrationDate;

}
