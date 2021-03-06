package db;

import db.UserProfile;
import org.hibernate.*;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

/**
 * Created by alexey on 16.11.2014.
 */
public class UserDataSetDAO {
    private SessionFactory sessionFactory;

    public UserDataSetDAO(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public boolean save(UserProfile user) {
        if (getUserDataByLogin(user.getLogin()) == null && getUserDataByEmail(user.getEmail()) == null) {
            Session session = sessionFactory.openSession();
            Transaction transaction = session.beginTransaction();
            UserDataSet userDataSet = new UserDataSet(user);
            session.save(userDataSet);
            transaction.commit();
            session.close();
            return true;
        }
        return false;
    }

    public UserDataSet getUserDataById(long id) {
        Session session = sessionFactory.openSession();
        Criteria criteria = session.createCriteria(UserDataSet.class);
        UserDataSet userDataSet = (UserDataSet) criteria.add(Restrictions.eq("id", id)).uniqueResult();
        session.close();
        return userDataSet;
    }

    public UserDataSet getUserDataByLogin(String login) {
        Session session = sessionFactory.openSession();
        Criteria criteria = session.createCriteria(UserDataSet.class);
        UserDataSet userDataSet = (UserDataSet) criteria.add(Restrictions.eq("login", login)).uniqueResult();
        session.close();
        return userDataSet;
    }

    public UserDataSet getUserDataByEmail(String email) {
        Session session = sessionFactory.openSession();
        Criteria criteria = session.createCriteria(UserDataSet.class);
        UserDataSet userDataSet = (UserDataSet) criteria.add(Restrictions.eq("email", email)).uniqueResult();
        session.close();
        return userDataSet;
    }

    public UserDataSet getUserDataByToken(String token) {
        Session session = sessionFactory.openSession();
        Criteria criteria = session.createCriteria(UserDataSet.class);
        UserDataSet userDataSet = (UserDataSet) criteria.add(Restrictions.eq("token", token)).uniqueResult();
        session.close();
        return userDataSet;
    }

    public long getUsersCount() {
        Session session = sessionFactory.openSession();
        Criteria criteria = session.createCriteria(UserDataSet.class);
        Long result = (long)criteria.setProjection(Projections.projectionList()
                .add(Projections.count("id"))).uniqueResult();
        session.close();
        return result;
    }
}
