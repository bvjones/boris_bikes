require_relative 'bike'

class DockingStation
  attr_reader :bike

  def release_bike
    Bike.new
  end

  def dock_bike(bike)
    return docking_station_full unless @bike.nil?
      @bike = bike
  end

  def bike
    if @bike == nil
      no_bikes_error
    else
      @bike
    end
  end

  def no_bikes_error
    raise 'No bikes'
  end

  def docking_station_full
    raise 'Docking station full'
  end

end
