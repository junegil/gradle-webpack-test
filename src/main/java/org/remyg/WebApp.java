package org.remyg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

public class WebApp {

  public static void main(String args[]) {
    SpringApplication.run(WebAppConfig.class);
  }

  @EnableAutoConfiguration
  public class WebAppConfig {
  }

}
