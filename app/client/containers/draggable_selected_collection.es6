import React from 'react';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';
import { selectItem, toggleItem, shiftSelectItems, clearSelection, storeItems } from '../actions';
import onClickOutside from 'react-onclickoutside';

import draggable from '../hocs/draggable.es6';
import { ItemTypes } from '../lib/item_types.es6';
import { getSelectedBottomMaterials } from '../selectors';

import { BiomaterialTable, BiomaterialTableRow } from '../components/biomaterial_table.es6';
import FontAwesome from '../components/font_awesome.es6';

let draggableBiomaterialTableRow = draggable(BiomaterialTableRow, (connectDragPreview, props) => {
  let img = new Image();

  if (props.selected.length > 1) {
    img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEHklEQVRYR+2XXUxbZRjHf/RQyLYqLYYhmR/DwPzED6ittHOw0CVkjm0ZShjfF2MLF1uMid4sQSMJF7syZnHJ6i74MDNKTOaQjsCpNy60FKZbsuHmAoFS8SjfU8HRFnN6ToE6tzGoJCacy3P+5//+3ud93ufJE4PyxJ1oEf8KBIMEAkHm5+eZVz/EAIIgEKvR8N5beboTLeLvUdTFy/7yo68/296/M/MFwzOPpaDRzBOv1RAvKB/7pXE+/9YzdvxgvrH+7IWenZkZj0RBN3H8YP5TCwDANvsFt3tvdib6TQLXvFP8ORfEkp5Ik+ihwmYyAxKQbHe43AWWLAwr1Tk9VOSF/G6EAbTAFrvDPVBgeQX9RoE+7zQz/iDZ6Yk0ih4qbaZU4Fdg82mHayAMuhJdkwIg+/nCAHKkN9sdLqlAjUDf8DQzcwpAg9hNlc2cvAjQJe3NzgpFaiU6dUMhvwiA047VGS8btLObql3KhtYBVhUBg07gRzVZzWkPkCvROIL9liySdLHc9Cm3JSPVQKPYTeVykjUaAAcsRvq1Goo6hxgZnma25sVwvbj/bbk3gJHI0BruuIZ2R5dUaDUyqBUodSoA44czaBY9lNtMqwFwSfstRpJ0Ajd9t5nxB8hI3RAuRAvGYQBvGMA3zWh1lAAOWEz0awco6vyAkeEJZmvO0yT2UGF79b8HkCthodXMoNZLqbMuBDB++EuaxV7Kbca1A/BqhxUA3wSj1V+sEsCIXic3t1vMyr0lTU/D3ZIwHIHoAbikAouRBJ3A1Z+DzPoDbN+qpUH0UKUm6x3NSD6CaALssZpJ8XfD10UwFoR3hmgQe6hSc2ptAIKXobVEATjWR4PYS5WaU2sEcAW+KYOxABy9ug6wHoH/SQRK1Eo4dp9KWCJ3Q980Y//ajFxSqA4E5VtQCqMBOHbtXhFwS4VWE4PaIYrFDxkZHmfqyFc0O3spz1vaC+SekRVqx8Wi0o6njmTQ7PRQnrfYju0Ot7THauLR4A9wvgRG/fD2DRqdvVSqfhF14FTrRak418KEZpwdHUfZl7Cdkzk1nGl3cyj/tYVmdKr1O6k4N5sJDezoGGJfgpaTOVs40+7iUH72gu6T1ovSm7kWDEEvsS0WeLwcbPV82u6mWvWLAKhrbrue8/JzenP6k8TFKWPZlf5fONf1/WRt2e6nw3OBontWb07fukTn41zX5cnasjcWdZ+1XX/9pef1mdueQNDCRuBSv0Rr16XJ91W/pQB6IL2uua0jRhAS1JmRYCAwVVu2exfwEzApz5GROnmMjbmbLu3dj5s+ejgp2aqoYD7gj/BbCiCPZ0nyiAY8FNYDt+QRCvgNmAMeRJcIpADyhmLl9f/ptxRA3rRsvkke18MRAG4Df6iLh18vVycvugGIBzTqzxF+fwNUFhaXPuA7IQAAAABJRU5ErkJggg==';
  } else {
    img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE10lEQVRYR+2Xe0zVZRjHP+/vd26A3ETFcDrwQqRTwuNlIc7mFTWX1+nALFuas380m7mmhuAl7eJyq1biXCUahZJN5WBpm0aaLouZkopXPPOKCEgHzuX3tt+PI6HjIJjMf3z/Oufs7H0+z/d9vs/7vILHvMRjjk9rASzr8vbV+XwaPk1Dk7KBXwiBSVFQVYXFU0dYAXdLkmstQPiyTdvzJg8fMjKhazRSk6iKQBWgKnDKeZMdB49VfPLWq72cTmd5WwCEAj0zthQce3PqGKwm+KusEiQ8GxtB1tYCMmaOGwycBm63BYAJiMnMcVxcMGU0FlVyoqzKiJMUG8HKbYUsT0+NA5yApy0A9D07ZW51XFsw2Q9wuQqhKxDnB0hLjQautyS4/p/W1sATgCcK1CuQ47jW4ILHUYQZWwquLZwy2ugDJ/wAiXof2OYgI31sm7pAfefz3PeTeicsHDewH4qqUXK5CqQkPiacXb8VU1xy+qM182YsBnwtsWJrbRiSmeO4M3vMUKLaBVHn83L+eg16KwyxWugcYebj/J/5JS8nem/+1y3qBa0BUN/dvHN7cmLvFwfFx2E1Cypdbq5W1BqJahJ6RIdy/PwlfjpavHPF7ElTAe+DVGgpgHhtcVZCrwHPnXx5dIpx4wWbFW5U11FR40Eg0TQwmRSe6RLK+h37cZ4tHfbxknkHDXmaWS0FsKzYsuvYKHtin26dOhDZzmKc+8UbNbh9+v5S/4pPSmIiQ7hVWUHegaMnMmZNsAN1/xdALFq/eVKPXvHbpw0bTJ3XQ0SwGUXCqSvVCEUYMDqAZiQr6B8bwcaCQ5ReOP/6uvnp2foJBYJoiQK2rK2OionJdluQLZjoCAv68FFb56Ws3IWiCKQfQCLxadAxzIpF8ZFdWORanjY2CnA9LIC6dNN3axNiuy8aae+L2+MlKkwfdqCqxsPNajfCEKBeAR1ArwUdIikunPxfi/nz7zMfrpwz7e1AtnyQAiErtznuzBw+FIRKh3YWLCZhTD/llZJaN4Ya9wJIvJrEapV0iTKzOrewWVs2B9BgO3v3nmwu2U185xhUBKEWGzN3r6Ky7g6KUAwV7i69Cryal+lx48lOncuR0jL2HPo9oC0DARi2e3pg8slXRjxPofMIxTWnGNV1ICZFYEKQ/uMqQsxBBtC9Y4XEJzVqvC7WJC4kvZ+dD/L2c/nsmSZtGQjAkqnbLql/n/D2Vmb/kcW6AfPRpA+LYqLk9jk2lOQTpFpRGqfvl0GvBY/mNerh+5S1+FxuvtpX1KQtmwJosN2MlGTSji+jb2QcE54ahsSLTTGz9+oR9lw9jFUxGzVw/zI6g5TUam46maP4Ychysh2HKT1XOm/tGy9tbGzLpgBsq74prB4/qL+pc1gk7135krFdBxuBFSmxqmY2XPyWC67rqKL+AAK1Oo/0Ylf7sqTLLGw2D5/uOuBZlpYa3tiWTQG0X5O7t3zO+JFoXokqFKPRGAOkMf8LLALMKij+3+o/+HVoXBL3lcdnu4uY/0KK3hdu3VWtKYCOS7/IzQ8OixzS+OVzv8yimXn2vweTXg31/UGvlX+qbxetnjt9InCzOQD98dEN6ADo74BHtfSbUQ98CahuDkAPGgTYHnJsDwSsi6Hf3XpbbrimH9QJH1X2Aff5F+QIHT9Fx9lTAAAAAElFTkSuQmCC';
  }

  img.onload = () => connectDragPreview(img);
});

const biomaterialSource = {
  beginDrag(props) {
    return { biomaterial: props.biomaterial, selected: props.selected };
  }
};

function dragCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

draggableBiomaterialTableRow = DragSource(ItemTypes.BIOMATERIAL, biomaterialSource, dragCollect)(draggableBiomaterialTableRow)

const mapStateToProps = (state) => {
  return {
    biomaterials: getSelectedBottomMaterials(state),
    materials: state.materials,
    decorators: { row: draggableBiomaterialTableRow },
    selected: state.browser.selected
  };
}

let Wrapper = onClickOutside(React.createClass({

  onClick(biomaterial, index, evt) {
    const {dispatch, biomaterials} = this.props;

    dispatch(storeItems(biomaterials));

    if (evt.metaKey) {
      dispatch(toggleItem(index));
    } else if (evt.shiftKey) {
      dispatch(shiftSelectItems(index))
    } else {
      dispatch(selectItem(index));
    }
  },

  handleClickOutside() {
    const {dispatch} = this.props;
    dispatch(clearSelection());
  },

  render() {
    const {dispatch, ...rest} = this.props;

    return (
      <BiomaterialTable onClick={this.onClick} {...rest} />
    )
  }
}));


export default connect(
  mapStateToProps
)(Wrapper);
