package ml.el.database;

import java.io.IOException;


public class Go extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("text/html; charset=UTF-8");
        DBconnector dBconnector = new DBconnector();
        String query = "SELECT name FROM sity";
        String res = dBconnector.setQuery(query);
        response.getWriter().write(res);
    }
}
