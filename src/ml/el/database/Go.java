package ml.el.database;

import java.io.IOException;
import java.util.Objects;


public class Go extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("text/html; charset=UTF-8");
        String parametr = request.getParameter("data");
        DBconnector dBconnector = new DBconnector();
        String query, res;
        if (Objects.equals(parametr, "sity")) {
            query = "SELECT name FROM sity";
            res = dBconnector.setQuery(query);
            response.getWriter().write(res);
        } else {
            if (Objects.equals(parametr, "street")) {
                query = "SELECT name FROM streets";
                res = dBconnector.setQuery(query);
                response.getWriter().write(res);
            }
        }
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }
}
