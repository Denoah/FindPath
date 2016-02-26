package ml.test.database;

import ml.el.database.DBconnector;
import org.junit.Test;

import java.sql.Connection;

import static org.junit.Assert.*;

public class DBconnectorTest {

    @Test
    public void testConnect() throws Exception {
        DBconnector dBconnector = new DBconnector();
        Connection connection = dBconnector.connect();
        assertNotNull(connection);
    }

    @Test
    public void testSetQuery() throws Exception {
        DBconnector dBconnector = new DBconnector();
        String query = "SELECT name FROM sity";
        String result = dBconnector.setQuery(query);
        System.out.println(result);
        assertNotEquals("", result);
    }

}