package com.vanguard.be.service.impl;

import com.vanguard.be.service.AmService;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@Service
public class AmServiceImpl implements AmService {

    @Override
    public JSONObject getSessionInfo(String amSessionId) {
        String url = "http://openam.example.com:18080/openam/identity/json/attributes?subjectid=";

        CloseableHttpClient httpClient = HttpClients.createDefault();

        JSONObject result = null;


        try {
            HttpGet httpGet = new HttpGet(url + amSessionId);

            httpGet.setHeader("Content-Type", "application/json");
            HttpResponse httpResponse = httpClient.execute(httpGet);

            BufferedReader rd = new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent()));

            StringBuffer rb = new StringBuffer();
            String line = "";
            while ((line = rd.readLine()) != null) {
                rb.append(line);
            }

            System.out.println(rb.toString());
            String rbStr = rb.toString();
            result = new JSONObject(rbStr);

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                httpClient.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return result;
    }
}
