package com.zdj.eblog.entity;

import java.sql.Date;

public class Blog {
  /*
   * id int not null auto_increment primary key,
   * topic varchar(30),
   * title tinytext,
   * article text,
   * date timestamp,
   * foreign key(topic) references topicblock(topic)
   */
  private int id;
  private String topic;
  private String title;
  private String article;
  private Date date;
 

  public int getId() {
    return id;
  }
  public void setId(int id) {
    this.id = id;
  }
  public String getTopic() {
    return topic;
  }
  public void setTopic(String topic) {
    this.topic = topic;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getArticle() {
    return article;
  }
  public void setArticle(String article) {
    this.article = article;
  }
  public Date getDate() {
    return date;
  }
  public void setDate(Date date) {
    this.date = date;
  }

}
