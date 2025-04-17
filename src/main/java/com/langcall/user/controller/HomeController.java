package com.langcall.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String maincontroller(){
        return "/";
    }

    @GetMapping("/hello")
    public String hello(){
        System.out.println("hello world");
        return "hello world";
    }


}
