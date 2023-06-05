package com.zdj.eblog.entity;

public class TopicBlock {
  private int id;
  private String topic;
  private String label;
  private String intro;

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

  public String getIntro() {
    return intro;
  }

  public void setIntro(String intro) {
    this.intro = intro;
  }

  @Override
  public String toString() {
    return "Block [id=" + id + ", topic=" + topic + ", intro=" + intro + "]";
  }

  public String getLabel() {
    return label;
  }

  public void setLabel(String label) {
    this.label = label;
  }
}
