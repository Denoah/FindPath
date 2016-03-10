package ml.test.database;

import ml.el.database.DBconnector;
import org.junit.Test;

import java.sql.BatchUpdateException;
import java.sql.Connection;

import static org.junit.Assert.*;

public class DBconnectorTest {


//    @Test
//    public void testSetQuery() throws Exception {
//        DBconnector dBconnector = new DBconnector();
//        String query = "SELECT name FROM sity";
//        String result = dBconnector.setQuery(query);
//        System.out.println(result);
//        assertNotEquals("", result);
//    }

    @Test
    public void testSetQueryAdd() throws Exception {
        DBconnector dBconnector = new DBconnector();
        String query = "INSERT INTO sity (name) VALUES ('addcaa');";

        String res = dBconnector.setInsertQuery(query);
        System.out.println(res);


    }



}