import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';

import Button from '../../components/button/button';
import HeaderWithBackIcon from '../../components/header-with-back-icon/header-with-back-icon';
import PlanCard from '../../components/plan-card/plan-card';
import Icon from 'react-native-vector-icons/AntDesign';

import plans from '../../../PLANS.json';
import Achievement from '../../assets/svgs/achievement';
import PlanModal from '../../components/plan-modal/plan-modal';
import CustomModal from '../../components/payment-modal/payment-modal';
import {makeStyles} from './styles';

const Plans = ({navigation}) => {
  const styles = makeStyles();
  const [modal, setModal] = useState(false);
  const [activeTextBox, setActiveTextBox] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);

  const [plan, setPlans] = useState([]);

  useEffect(() => {
    setPlans(plans.plans);
  }, []);

  return (
    <>
      <HeaderWithBackIcon title="Subscriptions Plans" navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.center, styles.m50]}>
            <View style={styles.icon}>
              <Achievement />
            </View>
            <Text style={styles.title}>PREMIUM PLAN</Text>
            <View style={styles.calender}>
              <Icon name="calendar" color="orange" size={30} />
              <Text style={styles.date}>54 Days Left</Text>
            </View>
            <View style={[styles.center, styles.m20]}>
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

          <View style={styles.p10}>
            {plan?.length > 0 ? (
              plan?.map((p, index) => {
                return (
                  <TouchableOpacity
                    testID={`plan-card${index}`}
                    key={index}
                    style={styles.m50}
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
              })
            ) : (
              <Text style={styles.text3}>No Plan Found</Text>
            )}
            <View style={styles.m50}>
              <TouchableOpacity
                disabled={activeTextBox < 0}
                style={styles.btn}
                onPress={() => setModal(!modal)}>
                <Button text="ACTIVATE/UPDATE PLAN" />
              </TouchableOpacity>
            </View>
            <CustomModal
              modal={modal}
              setModal={setModal}
              navigation={navigation}
            />
          </View>
        </View>
        <PlanModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          planDetails={plan[activeTextBox]}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

export default Plans;
