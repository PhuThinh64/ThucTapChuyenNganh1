package com.example.webdatsanbongda.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String index(){
        return "index";
    }
    @GetMapping("/booking")
    public String booking(){
        return "booking";
    }
    @GetMapping("/checkout")
    public String checkout(){
        return "checkout";
    }
    @GetMapping("/contact")
    public String contact(){
        return "contact";
    }
    @GetMapping("/venue-detail")
    public String venueDetail(){
        return "venue-detail";
    }
    @GetMapping("/venues")
    public String venues(){
        return "venues";
    }
    @GetMapping("/account")
    public String account(){
        return "account";
    }
    @GetMapping("/about")
    public String about(){
        return "about";
    }
    @GetMapping("/login")
    public String login(){
        return "login";
    }
    @GetMapping("/forgot-password")
    public String forgotPassword(){
        return "forgot-password";
    }
    @GetMapping("/register")
    public String register(){
        return "register";
    }
}
