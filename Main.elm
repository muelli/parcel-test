module Main exposing (..)

import Browser
import Browser.Navigation exposing (Key, load, pushUrl, reloadAndSkipCache)
import Html exposing (div, i)
import Html.Attributes exposing (class)
import Url

type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url

type alias Model = (String, Key)

type Flags = Nothing

subscriptions model = Sub.batch []

init () url key = 
    (("foo", key), Cmd.none)


update msg model =
    (model, Cmd.none)



type alias Page msg = 
    { title: String
    , body: List (Html.Html msg)
    }

view model =
    Page "Hello Elm"
        [Html.div
            [class "bg-primary"]
            [Html.text "Hello, Elm, World"
            , i [class "fas fa-hospital"] []]
            ]


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }

