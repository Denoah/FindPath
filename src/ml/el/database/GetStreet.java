package ml.el.database;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "GetStreet")
public class GetStreet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html; charset=UTF-8");
        DBconnector dBconnector = new DBconnector();
        String street = request.getParameter("data");
        if (street == null) {
            String query = "SELECT name FROM streets WHERE point='Улица';";
            response.getWriter().write(dBconnector.setQuery(query));
        } else {
            String query = "INSERT INTO streets (name, point) VALUES ('" + street + "', 'Улица');";
            response.getWriter().write(dBconnector.setInsertQuery(query));
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
