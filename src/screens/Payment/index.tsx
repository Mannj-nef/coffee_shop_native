import { SafeAreaView, Text, View, Image, ScrollView } from 'react-native'
import styles from './style'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../themes'
import { Button, ButtonBack } from '../../components/Button'
import { CARD_VISA_IMAGE } from '../../mocks/images'
import { SCREEN } from '../../navigators/stackScreen'
import LinearGradient from 'react-native-linear-gradient'
import { PAYMENT_METHODS } from '../../mocks/payment'

interface PaymentProps {}

const Payment = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <View style={{ position: 'absolute' }}>
          <ButtonBack handleBack={() => navigation.pop()} />
        </View>

        <Text
          style={{
            color: COLORS.primaryWhiteHex,
            fontSize: FONTSIZE.size_24,
            fontWeight: '700',
            textAlign: 'center',
            marginTop: 33,
          }}>
          Payment
        </Text>
      </View>
      <ScrollView>
        <View>
          <View
            style={{
              marginTop: 30,
              height: 270,
              borderRadius: 30,
              padding: 15,
              borderWidth: 2,
              borderColor: COLORS.primaryOrangeHex,
              marginHorizontal: SPACING.space_16,
            }}>
            <View>
              <Text style={{ color: COLORS.primaryWhiteHex, fontSize: FONTSIZE.size_14, fontWeight: '700' }}>
                Credit Card
              </Text>
            </View>

            <View>
              <Image source={CARD_VISA_IMAGE} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
            </View>
          </View>

          <View style={{ paddingHorizontal: SPACING.space_20, gap: SPACING.space_10, marginVertical: 20 }}>
            {PAYMENT_METHODS.map((payment) => (
              <LinearGradient
                key={payment.id}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                style={{
                  paddingVertical: SPACING.space_15,
                  borderRadius: BORDERRADIUS.radius_20,
                  paddingHorizontal: SPACING.space_20,
                  flexDirection: 'row',
                  gap: SPACING.space_10,
                }}>
                <View style={{ width: 30 }}>
                  <Image source={payment.imageUrl} />
                </View>

                <View>
                  <Text style={{ fontSize: FONTSIZE.size_16, color: COLORS.primaryWhiteHex, fontWeight: '600' }}>
                    {payment.name}
                  </Text>
                </View>
              </LinearGradient>
            ))}
          </View>
        </View>

        <View
          style={{
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SPACING.space_20,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.propertyText]}>Total Price</Text>

            <View style={{ flexDirection: 'row', gap: SPACING.space_8 }}>
              <Text
                style={[
                  styles.propertyText,
                  {
                    color: COLORS.primaryOrangeHex,
                    marginTop: SPACING.space_2,
                    fontSize: FONTSIZE.size_24,
                    fontWeight: '600',
                  },
                ]}>
                {'$'}
              </Text>

              <Text
                style={[
                  styles.propertyText,
                  { marginTop: SPACING.space_2, fontSize: FONTSIZE.size_24, fontWeight: '600' },
                ]}>
                {10}
              </Text>
            </View>
          </View>

          <Button
            onPress={() => {
              navigation.navigate(SCREEN.payment)
            }}
            title="Pay"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Payment
