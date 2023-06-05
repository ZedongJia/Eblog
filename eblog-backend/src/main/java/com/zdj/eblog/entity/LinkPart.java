package com.zdj.eblog.entity;

import java.sql.Date;

public class LinkPart {
  private int id; 
	private String label;
	private String part;
	private Date date;
  private String content;
  public int getId() {
    return id;
  }
  public void setId(int id) {
    this.id = id;
  }
  public String getLabel() {
    return label;
  }
  public void setLabel(String label) {
    this.label = label;
  }
  public String getPart() {
    return part;
  }
  public void setPart(String part) {
    this.part = part;
  }
  public Date getDate() {
    return date;
  }
  public void setDate(Date date) {
    this.date = date;
  }
  public String getContent() {
    return content;
  }
  public void setContent(String content) {
    this.content = content;
  }
  
}
