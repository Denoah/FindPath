package ml.el.database;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@WebServlet(name = "getAdress")
public class getAdress extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html; charset=UTF-8");
        String name = request.getParameter("name");
        DBconnector dBconnector = new DBconnector();
        String query = "SELECT point FROM streets WHERE name = '" + name + "';";
        String point = "";
        String disc;

        Connection connection = dBconnector.connect();

        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                point = resultSet.getString("point");

            }
            if (point.equals("Место")) {
                String newQuery = "SELECT disc FROM streets WHERE name = '"+ name +"'";
                resultSet = statement.executeQuery(newQuery);
                while (resultSet.next()) {
                    response.getWriter().write(resultSet.getString("disc"));
                }
            } else {
                response.getWriter().write(name);
            }
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
