import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import Button from '../../components/button/button';
import HeaderWithBackIcon from '../../components/header-with-back-icon/header-with-back-icon';
import PlanCard from '../../components/plan-card/plan-card';
import Icon from 'react-native-vector-icons/AntDesign';

import plans from '../../../PLANS.json';
import Achievement from '../../assets/svgs/achievement';
import PlanModal from '../../components/plan-modal/plan-modal';
import CustomModal from '../../components/payment-modal/payment-modal';

const Plans = () => {
  const [modal, setModal] = useState(false);
  const [activeTextBox, setActiveTextBox] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [plan, setPlans] = useState([]);

  useEffect(() => {
    setPlans(plans.plans);
  }, []);
  return (
    <>
      <PlanModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        planDetails={plan[activeTextBox]}
      />
      <HeaderWithBackIcon title="Subscriptions Plans" />
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.center, {marginTop: 50}]}>
            <View style={styles.icon}>
              <Achievement />
            </View>
            <Text style={styles.title}>PREMIUM PLAN</Text>
            <View style={styles.calender}>
              <Icon name="calendar" color="orange" size={30} />
              <Text style={styles.date}>54 Days Left</Text>
            </View>
            <View style={[styles.center, {marginTop: 20}]}>
              <Text style={styles.text2}>
                Your premium plan will be expire on
              </Text>
              <Text style={styles.text2}>May 22, 2022</Text>
            </View>

            <View style={styles.plansContainer}>
              <View style={styles.line} />
              <View style={styles.view1}>
                <Text style={styles.text1}>PLANS</Text>
              </View>
            </View>
          </View>

          <View style={{padding: 10}}>
            {plan?.map((p, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{marginTop: 50}}
                  onPress={() => {
                    setActiveTextBox(index);
                    setModalVisible(true);
                  }}
                  activeOpacity={1}>
                  <PlanCard
                    plan={p}
                    index={index}
                    activeTextBox={activeTextBox}
                  />
                </TouchableOpacity>
              );
            })}
            <View style={{marginTop: 50}}>
              <TouchableOpacity
                disabled={activeTextBox < 0}
                style={styles.btn}
                onPress={() => setModal(!modal)}>
                <Button text="ACTIVATE/UPDATE PLAN" />
              </TouchableOpacity>
            </View>
            <CustomModal modal={modal} setModal={setModal} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Plans;

const styles = StyleSheet.create({
  view1: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#033534',
  },
  container: {
    flex: 1,
    backgroundColor: '#032726',
  },
  center: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#00b4b0',
    borderWidth: 2,
    width: 100,
    height: 100,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  calender: {
    width: '40%',
    height: 40,
    borderRadius: 50,
    backgroundColor: '#033534',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plansContainer: {
    position: 'relative',
    width: '100%',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    width: '95%',
    height: 1,
    backgroundColor: '#033c3a',
  },
  text1: {
    marginLeft: 10,
    color: '#fff',
    fontSize: RFValue(20),
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    marginTop: 20,
    fontSize: RFValue(30),
    fontWeight: '700',
  },
  date: {marginLeft: 10, color: 'orange'},
  text2: {color: '#fff', fontSize: RFValue(18)},
});
