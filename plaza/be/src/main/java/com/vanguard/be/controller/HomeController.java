package com.vanguard.be.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

@Controller
public class HomeController {

    @RequestMapping("/checkAMSession")
    public HttpServletResponse home(HttpServletRequest req, HttpServletResponse res) {
        String username = "";

        Map<String, String> map = new HashMap<String, String>();

        Enumeration headerNames = req.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String key = (String) headerNames.nextElement();
            String value = req.getHeader(key);
            map.put(key, value);
        }

        if (map.get("username") != null) {
            username = map.get("username");
        }

        res.setHeader("Location", "http://openig.example.com:8080/plaza?username=admin");
        res.setStatus(302);

        return res;
    }
}
