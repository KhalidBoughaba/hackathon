import React, {useState, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Btn} from '../components';
import Task from '../components/Task';
import {Colors, Fonts} from '../constants';
import {Displayer} from '../utils';
import LottieView from 'lottie-react-native';
import Tree from '../../assets/Tree.json';

const a = [
  [
    {
      title: 'Use washing water fruits or vegetables to irrigate plants.',
      Description:
        'Steal some silverware and cute mugs from your home stash and keep them in your work desk. Next time there is a birthday cake, you won’t need to go stalking around for plastic cutlery! If you simply need a straw for your iced coffee or orange juice, invest in non-plastic options. Stainless steel straws, like these ones from Greens Steel, are a great reusable option. These ones even come with a straw brush cleaner!',
    },
    {
      title: 'Use washing water fruits or vegetables to irrigate plants.',
      Description:
        'Stop buying a daily lunch with wasteful plastic packages, utensils, napkins, and other extraneous packaging. Invest in some reusable Tupperware and watch both the environment and your wallet heave a sigh of relief. You can also invest in Bee’s Wrap, a sustainable alternative to plastic food storage containers.',
    },
    {
      title:
        'Use the unprinted back of a sheet to take notes.Reuse worn clothing to make rags.',
      Description:
        'If you do go out for lunch, eat at eco-friendly restaurants—and make sure to tip your server well. ',
    },
    {
      title: 'Make sure the dishwasher is full when it is full of dishes.',
      Description:
        'Normally, we would reserve this tip for upper management. Give management a break by taking the onus off of them to begin a recycling initiative. Some states will offer free recycling bins or recycling start kits for offices or schools. Look into it and get started with office-wide recycling.',
    },
    {
      title:
        'energy : We can reduce our electricity bills by using a solar panel system that reduces our electricity consumption',

      Description:
        'When you’re on the go, you won’t always have a reusable bottle nearby. Instead of reaching for a plastic bottle, reach for a better option. Boxed Water is paper-based and environmentally friendly from beginning to end. It’s 100% pure water in a 100% recyclable box. If your office provides complimentary water, you should urge them to make it Boxed Water.',
    },
    {
      title: 'Close unused devices, such as a computer, TV, microwave, etc.',

      Description:
        'When you’re on the go, you won’t always have a reusable bottle nearby. Instead of reaching for a plastic bottle, reach for a better option. Boxed Water is paper-based and environmentally friendly from beginning to end. It’s 100% pure water in a 100% recyclable box. If your office provides complimentary water, you should urge them to make it Boxed Water.',
    },
    // 'Use washing water fruits or vegetables to irrigate plants.',
    // 'Choose the type of electric washing machine that saves both water and electricity.',
    // 'Use the unprinted back of a sheet to take notes.Reuse worn clothing to make rags.',
    // 'Make sure the dishwasher is full when it is full of dishes.',
    // 'energy : We can reduce our electricity bills by using a solar panel system that reduces our electricity consumption',
    // 'When you leave a room, turn off the lights',
    // 'Close unused devices, such as a computer, TV, microwave, etc.',
    // "Don't use non-essential appliances",
    // 'During the day, use sunlight instead of light bulbs.',
  ],
  [
    {
      title:
        ' Keep Your Own Utensils and Cups On-Hand (for Coffee, Orange Juice, Vodka, Whatever)',
      Description:
        'Steal some silverware and cute mugs from your home stash and keep them in your work desk. Next time there is a birthday cake, you won’t need to go stalking around for plastic cutlery! If you simply need a straw for your iced coffee or orange juice, invest in non-plastic options. Stainless steel straws, like these ones from Greens Steel, are a great reusable option. These ones even come with a straw brush cleaner!',
    },
    {
      title: 'Bring Your Lunch',
      Description:
        'Stop buying a daily lunch with wasteful plastic packages, utensils, napkins, and other extraneous packaging. Invest in some reusable Tupperware and watch both the environment and your wallet heave a sigh of relief. You can also invest in Bee’s Wrap, a sustainable alternative to plastic food storage containers.',
    },
    {
      title: 'Dine at EcoFriendly Businesses',
      Description:
        'If you do go out for lunch, eat at eco-friendly restaurants—and make sure to tip your server well. ',
    },
    {
      title: 'Reduce Electricity',
      Description:
        'Reduce electricity where you can. Do you need that desk lamp on when that 10 a.m. sun is glaring down? Does your phone need to be plugged in all day? Need that monitor on, or that screensaver bouncing around? A big part of saving energy at work is simply being mindful about what you don’t need at any given time.',
    },
    {
      title: 'Set Up Recycling Bins',
      Description:
        'Normally, we would reserve this tip for upper management. Give management a break by taking the onus off of them to begin a recycling initiative. Some states will offer free recycling bins or recycling start kits for offices or schools. Look into it and get started with office-wide recycling.',
    },
    {
      title: 'Skip Plastic Bottles and Drink Boxed Water',
      Description:
        'When you’re on the go, you won’t always have a reusable bottle nearby. Instead of reaching for a plastic bottle, reach for a better option. Boxed Water is paper-based and environmentally friendly from beginning to end. It’s 100% pure water in a 100% recyclable box. If your office provides complimentary water, you should urge them to make it Boxed Water.',
    },

    // 'Reduce Electricity',
    // 'Set Up Recycling Bins',
    // 'Communicate to Your Team',
  ],
];
const {setHeight, setWidth} = Displayer;
export default function App({route}) {
  const [isDailog, setIsDailog] = useState(false);
  const [discription, setDescription] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  useEffect(() => {
    setTaskItems(a[id]);
  }, []);

  const {post, id} = route.params;
  const completeTask = index => {
    setIsDailog(true);
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text
            style={[
              styles.sectionTitle,
              {alignSelf: 'center', marginVertical: 15},
            ]}>
            {post}
          </Text>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    completeTask(index);
                    setDescription(item.Description);
                  }}>
                  <Task text={item.title} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      {isDailog && (
        <>
          <Pressable style={styles.bg} onPress={() => setIsDailog(false)} />
          <View style={styles.Dialog}>
            <LottieView
              source={Tree}
              style={{width: setWidth(55), height: setWidth(55)}}
              autoPlay
            />
            <Text
              style={{
                marginTop: 10,
                color: Colors.Primary,
                fontSize: 24,
                fontFamily: Fonts.EC_Bold,
              }}>
              Good Job !
            </Text>
            <ScrollView>
              <Text style={styles.Description}>{discription}</Text>
              <Btn navigation={() => setIsDailog(false)}> Ok!</Btn>
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LighGreen,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: Colors.Primary,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Dialog: {
    paddingVertical: 20,
    alignItems: 'center',
    height: setHeight(80),
    top: setHeight(5),
    left: setWidth(50) - setWidth(40),
    width: setWidth(80),
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    position: 'absolute',
  },
  bg: {
    backgroundColor: '#000',
    height: setHeight(100),
    width: setWidth(100),
    opacity: 0.4,
    top: 0,
    position: 'absolute',
  },
  Description: {
    paddingHorizontal: 20,
    marginVertical: 20,
    fontSize: 16,
    color: '#000',
    fontFamily: Fonts.EC,
  },
});
