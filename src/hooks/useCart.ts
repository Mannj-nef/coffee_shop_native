import useShareStore from '../stores/shared'
import { EActionAmountCart, TCarts, price } from '../types/coffee'

const useCart = () => {
  const setCarts = useShareStore((state) => state.setCarts)
  const setAmountCart = useShareStore((state) => state.setAmountCart)

  const handleAddCard = ({ item, size }: { item: TCarts; size?: price }) => {
    if (size) {
      const itemCoffe: TCarts = {
        ...item,
        total_price: Number(item.prices.find((c) => c.size === size.size)?.price),
      }

      setCarts({ cardItem: itemCoffe, size })
      return
    }

    setCarts({
      cardItem: {
        ...item,
        total_price: +item.prices[0].price,
      },
      size: item.prices[0],
    })
  }

  const handleIncreaseCard = (id: string) => {
    setAmountCart(id, EActionAmountCart.INCREASE_CARD)
  }

  const handleDecreaseCard = (id: string) => {
    setAmountCart(id, EActionAmountCart.DECREASE_CARD)
  }

  return {
    handleDecreaseCard,
    handleIncreaseCard,
    handleAddCard,
  }
}

export default useCart
