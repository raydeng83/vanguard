package com.vanguard.be.controller;

import com.vanguard.be.model.User;
import com.vanguard.be.service.AmService;
import com.vanguard.be.service.UserService;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;

@RestController
@RequestMapping("/api/user")
public class UserResouce {

    private final UserService userService;
    private final AmService amService;

    public UserResouce(UserService userService, AmService amService) {
        this.userService = userService;
        this.amService = amService;
    }

    @RequestMapping("/all")
    public List<User> getAllUsers(HttpServletRequest request) {
        Map<String, String> map = new HashMap<>();

        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String key = headerNames.nextElement();
            String value = request.getHeader(key);
            map.put(key, value);
        }
        List<User> userList = userService.getAllUsers();

        return userList;
    }

    @RequestMapping(value = "/getUserByUsername", method = RequestMethod.POST)
    public User getUserByUsername(@RequestBody String username, HttpServletRequest request) {
        Map<String, String> map = new HashMap<String, String>();

        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String key = headerNames.nextElement();
            String value = request.getHeader(key);
            map.put(key, value);
        }
        User user = userService.getUserByUsername(username);

        if (user == null) {
            user = new User();
        }

        return user;
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public User createUser(@RequestBody User user) {
        user = userService.saveUser(user);

        return user;
    }

    @RequestMapping("/checkAMSession")
    public Map checkAMSession(@CookieValue("iPlanetDirectoryPro") String amCookie) {
        String uid = "";
        Map<String, String> map = new HashMap();

        AtomicBoolean exceptionState = new AtomicBoolean(false);

        JSONObject jo = amService.getSessionInfo(amCookie);

        Iterator<String> keys = jo.keys();

        while(keys.hasNext()) {
            String key = keys.next();
            if (key.equalsIgnoreCase("exception")) {
                JSONObject o = (JSONObject) jo.get(key);
                if (o.get("name").toString().equalsIgnoreCase("com.sun.identity.idsvcs.TokenExpired")) {
                    map.put("state", "failed");
                    map.put("exception", "invalidToken");
                    return map;
                }
            }
        }

        JSONArray attrArray = (JSONArray) jo.get("attributes");

        for (Object o : attrArray) {
            JSONObject j = (JSONObject) o;
            if (j.get("name").equals("uid")) {

                uid = (String) ((JSONArray) j.get("values")).get(0);
            }
        }

        map.put("username", uid);
        map.put("state", "success");
        return map;
    }
}
