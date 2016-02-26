package ml.el.database;

import java.sql.*;

public class DBconnector {
    String connectionString = "jdbc:postgresql://localhost:5432/taxi";
    String user = "taxi";
    String database = "taxi";
    String pass = "taxi";

    public Connection connect() {
        Connection connection = null;
        try {
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection(connectionString, user, pass);
        } catch (ClassNotFoundException e) {
            System.out.println(e);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return connection;
    }

    public String setQuery(String query) {
        String result = "";
        Connection connection = connect();
        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()) {
                if (result == "") {
                    result += resultSet.getString("name");
                } else {
                    result += ";" + resultSet.getString("name");
                }


            }
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }


        return result;
    }
}
