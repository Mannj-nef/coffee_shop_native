import { Text, View, Image } from 'react-native'
import styles from './styles'

interface ProfilePicProps {}

const ProfilePic = ({}: ProfilePicProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
        }}
        style={styles.profileImg}
      />
    </View>
  )
}

export default ProfilePic
