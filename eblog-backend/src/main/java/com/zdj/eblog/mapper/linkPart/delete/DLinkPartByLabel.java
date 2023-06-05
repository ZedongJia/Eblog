package com.zdj.eblog.mapper.linkPart.delete;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DLinkPartByLabel {
  @Delete("delete from linkpart where label=#{label}")
  public void delete(String label);
}
