package kr.co.metaField.entity;

import java.sql.Date;

import lombok.Data;

@Data
public class EmployeeEntity {
	private Integer id;
	private Integer userId;
	private String loginId;
	private String loginPwd;
	private String email;
	private Date birthDay;
	private String address;
	private String gender;
	private Date resignationDate;

}
