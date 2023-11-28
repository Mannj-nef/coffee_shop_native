import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native'
import styles from './styles'
import HeaderBar from '../../components/HeaderBar'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../themes'
import LinearGradient from 'react-native-linear-gradient'
import { CARD_VISA_IMAGE } from '../../mocks/images'
import { ORDERS } from '../../mocks/order'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

interface OrderHistoryProps {}

const OrderHistory = (props: OrderHistoryProps) => {
  const tabBarHeight = useBottomTabBarHeight()

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: SPACING.space_30 }}>
        <HeaderBar ScreenTitle="Order History" />
      </View>

      <ScrollView style={{ marginBottom: tabBarHeight }}>
        <View style={{ paddingHorizontal: SPACING.space_30 }}>
          {/* top */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_16, fontWeight: '600' }]}>Order Date</Text>
              <Text style={[styles.propertyText]}>20th March 16:23</Text>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_16, fontWeight: '600' }]}>Total Amount</Text>
              <Text style={{ color: COLORS.primaryOrangeHex }}>$ 74.40</Text>
            </View>
          </View>

          {/* content */}
          {ORDERS.map((order) => (
            <View style={{ gap: 20, marginTop: 20 }} key={order.id}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={{ padding: SPACING.space_20, borderRadius: BORDERRADIUS.radius_20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ width: 70, height: 70, borderRadius: BORDERRADIUS.radius_20, overflow: 'hidden' }}>
                    <Image source={CARD_VISA_IMAGE} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                  </View>

                  <View>
                    <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18 }]}>Cappuccino</Text>
                    <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_12 }]}>With Steamed Milk</Text>
                  </View>

                  <View style={{ flexDirection: 'row', gap: SPACING.space_8 }}>
                    <Text style={{ color: COLORS.primaryOrangeHex, fontSize: FONTSIZE.size_24, fontWeight: '700' }}>
                      $
                    </Text>
                    <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_24, fontWeight: '700' }]}>37.20</Text>
                  </View>
                </View>

                {order?.sizes.map((size) => (
                  <View
                    key={size}
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: COLORS.primaryBlackHex,
                        borderRadius: BORDERRADIUS.radius_10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View style={{ paddingVertical: 10, paddingHorizontal: 25 }}>
                        <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18, fontWeight: '600' }]}>S</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          paddingVertical: 10,
                          borderLeftWidth: 1,
                          borderLeftColor: COLORS.primaryGreyHex,
                          paddingHorizontal: 25,
                          gap: 4,
                        }}>
                        <Text style={{ fontSize: FONTSIZE.size_18, color: COLORS.primaryOrangeHex, fontWeight: '600' }}>
                          $
                        </Text>
                        <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18, fontWeight: '600' }]}>
                          4.20
                        </Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 4 }}>
                      <Text style={{ fontSize: FONTSIZE.size_18, color: COLORS.primaryOrangeHex, fontWeight: '600' }}>
                        X
                      </Text>
                      <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18, fontWeight: '600' }]}>2</Text>
                    </View>

                    <View>
                      <Text style={{ fontSize: FONTSIZE.size_18, color: COLORS.primaryOrangeHex, fontWeight: '600' }}>
                        8.40
                      </Text>
                    </View>
                  </View>
                ))}
              </LinearGradient>
            </View>
          ))}
        </View>

        <View style={{ paddingHorizontal: SPACING.space_30, marginTop: 25 }}>
          {/* top */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_16, fontWeight: '600' }]}>Order Date</Text>
              <Text style={[styles.propertyText]}>20th March 16:23</Text>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_16, fontWeight: '600' }]}>Total Amount</Text>
              <Text style={{ color: COLORS.primaryOrangeHex }}>$ 74.40</Text>
            </View>
          </View>

          {/* content */}
          {ORDERS.map((order) => (
            <View style={{ gap: 20, marginTop: 20 }} key={order.id}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={{ padding: SPACING.space_20, borderRadius: BORDERRADIUS.radius_20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ width: 70, height: 70, borderRadius: BORDERRADIUS.radius_20, overflow: 'hidden' }}>
                    <Image source={CARD_VISA_IMAGE} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                  </View>

                  <View>
                    <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18 }]}>Cappuccino</Text>
                    <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_12 }]}>With Steamed Milk</Text>
                  </View>

                  <View style={{ flexDirection: 'row', gap: SPACING.space_8 }}>
                    <Text style={{ color: COLORS.primaryOrangeHex, fontSize: FONTSIZE.size_24, fontWeight: '700' }}>
                      $
                    </Text>
                    <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_24, fontWeight: '700' }]}>37.20</Text>
                  </View>
                </View>

                {order?.sizes.map((size) => (
                  <View
                    key={size}
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: COLORS.primaryBlackHex,
                        borderRadius: BORDERRADIUS.radius_10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View style={{ paddingVertical: 10, paddingHorizontal: 25 }}>
                        <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18, fontWeight: '600' }]}>S</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          paddingVertical: 10,
                          borderLeftWidth: 1,
                          borderLeftColor: COLORS.primaryGreyHex,
                          paddingHorizontal: 25,
                          gap: 4,
                        }}>
                        <Text style={{ fontSize: FONTSIZE.size_18, color: COLORS.primaryOrangeHex, fontWeight: '600' }}>
                          $
                        </Text>
                        <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18, fontWeight: '600' }]}>
                          4.20
                        </Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 4 }}>
                      <Text style={{ fontSize: FONTSIZE.size_18, color: COLORS.primaryOrangeHex, fontWeight: '600' }}>
                        X
                      </Text>
                      <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18, fontWeight: '600' }]}>2</Text>
                    </View>

                    <View>
                      <Text style={{ fontSize: FONTSIZE.size_18, color: COLORS.primaryOrangeHex, fontWeight: '600' }}>
                        8.40
                      </Text>
                    </View>
                  </View>
                ))}
              </LinearGradient>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default OrderHistory
