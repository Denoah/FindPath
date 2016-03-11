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
import java.util.Objects;


@WebServlet(name = "GetPlace")
public class GetPlace extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html; charset=UTF-8");
        DBconnector dBconnector = new DBconnector();
        String point = request.getParameter("point");
        String disc = request.getParameter("disc");
        if (point == null) {
            String query = "SELECT name, disc FROM streets WHERE point='Место';";
            String result = "";

            Connection connection = dBconnector.connect();
            try {
                Statement statement = connection.createStatement();
                ResultSet resultSet = statement.executeQuery(query);

                while (resultSet.next()) {

                    if (Objects.equals(result, "")) {
                        result += resultSet.getString("name") + ":";
                        result += resultSet.getString("disc");
                    } else {
                        result += ";" + resultSet.getString("name") + ":";
                        result += resultSet.getString("disc");
                    }
                }
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            response.getWriter().write(result);
        } else {
            String query = "INSERT INTO streets (name, point, disc) VALUES ('" + point + "', 'Место', '" + disc + "');";
            response.getWriter().write(dBconnector.setInsertQuery(query));
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
