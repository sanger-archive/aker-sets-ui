class SetsController < ApplicationController

  before_action :materials_csv, only: [:show]

  def index
  end

  def search
  end

  def show
    respond_to do |format|
      format.csv { send_data materials_csv.build, filename: "#{filename}.csv" }
      format.tsv { send_data materials_csv.build(col_sep: "\t"), filename: "#{filename}.tsv" }
    end
  end

private

  def materials_csv
    @materials ||= MaterialsCsv.new(materials_params)
  end

  def materials_params
    params.permit(:id, :sortBy, :order, :format)
  end

  def filename
    materials_csv.set.name
  end

end
